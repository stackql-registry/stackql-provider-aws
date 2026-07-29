--- 
title: test_execution_result_items
hide_title: false
hide_table_of_contents: false
keywords:
  - test_execution_result_items
  - lexv2_models
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>test_execution_result_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_execution_result_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.test_execution_result_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_test_execution_result_items"
    values={[
        { label: 'list_test_execution_result_items', value: 'list_test_execution_result_items' }
    ]}
>
<TabItem value="list_test_execution_result_items">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="conversation_level_test_results" /></td>
    <td><code>object</code></td>
    <td>Results related to conversations in the test set, including metrics about success and failure of conversations and intent and slot failures.</td>
</tr>
<tr>
    <td><CopyableCode code="intent_classification_test_results" /></td>
    <td><code>object</code></td>
    <td>Intent recognition results aggregated by intent name. The aggregated results contain success and failure rates of intent recognition, speech transcriptions, and end-to-end conversations.</td>
</tr>
<tr>
    <td><CopyableCode code="intent_level_slot_resolution_test_results" /></td>
    <td><code>object</code></td>
    <td>Slot resolution results aggregated by intent and slot name. The aggregated results contain success and failure rates of slot resolution, speech transcriptions, and end-to-end conversations</td>
</tr>
<tr>
    <td><CopyableCode code="overall_test_results" /></td>
    <td><code>object</code></td>
    <td>Overall results for the test execution, including the breakdown of conversations and single-input utterances.</td>
</tr>
<tr>
    <td><CopyableCode code="utterance_level_test_results" /></td>
    <td><code>object</code></td>
    <td>Results related to utterances in the test set.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#list_test_execution_result_items"><CopyableCode code="list_test_execution_result_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-test_execution_id"><code>test_execution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of test execution result items.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-test_execution_id">
    <td><CopyableCode code="test_execution_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the test execution to list the result items.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_test_execution_result_items"
    values={[
        { label: 'list_test_execution_result_items', value: 'list_test_execution_result_items' }
    ]}
>
<TabItem value="list_test_execution_result_items">

Gets a list of test execution result items.

```sql
SELECT
conversation_level_test_results,
intent_classification_test_results,
intent_level_slot_resolution_test_results,
overall_test_results,
utterance_level_test_results
FROM aws.lexv2_models.test_execution_result_items
WHERE test_execution_id = '{{ test_execution_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
