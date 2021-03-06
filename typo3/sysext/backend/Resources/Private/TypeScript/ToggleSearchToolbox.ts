/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

import * as $ from 'jquery';
import DocumentHeader = require('./DocumentHeader');
import 'TYPO3/CMS/Backend/jquery.clearable';

/**
 * Module: TYPO3/CMS/Backend/ToggleSearchToolbox
 * Toggle the search toolbox
 * @exports TYPO3/CMS/Backend/ToggleSearchToolbox
 */
class ToggleSearchToolbox {
  constructor() {
    $((): void => {
      this.initialize();
    });
  }

  private initialize(): void {
    const $toolbar = $('#db_list-searchbox-toolbar');
    $('.t3js-toggle-search-toolbox').on('click', (): void => {
      $toolbar.toggle();
      DocumentHeader.reposition();
      if ($toolbar.is(':visible')) {
        $('#search_field').focus();
      }
    });

    const $searchFields = $('#search_field');
    const searchResultShown = ('' !== $searchFields.val());

    // make search field clearable
    $searchFields.clearable({
      onClear: (): void => {
        if (searchResultShown) {
          $(this).closest('form').submit();
        }
      }
    });
  }
}

export = new ToggleSearchToolbox();
