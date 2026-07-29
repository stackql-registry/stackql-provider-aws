--- 
title: event_prediction_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - event_prediction_metadatas
  - frauddetector
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

Creates, updates, deletes, gets or lists an <code>event_prediction_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_prediction_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.event_prediction_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_prediction_metadata"
    values={[
        { label: 'get_event_prediction_metadata', value: 'get_event_prediction_metadata' }
    ]}
>
<TabItem value="get_event_prediction_metadata">

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
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The detector ID. (pattern: &lt;code&gt;^&#91;0-9a-z_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="detector_version_id" /></td>
    <td><code>string</code></td>
    <td>The detector version ID. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="detector_version_status" /></td>
    <td><code>string</code></td>
    <td>The status of the detector version.</td>
</tr>
<tr>
    <td><CopyableCode code="entity_id" /></td>
    <td><code>string</code></td>
    <td>The entity ID.</td>
</tr>
<tr>
    <td><CopyableCode code="entity_type" /></td>
    <td><code>string</code></td>
    <td>The entity type.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluated_external_models" /></td>
    <td><code>array</code></td>
    <td>External (Amazon SageMaker) models that were evaluated for generating predictions.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluated_model_versions" /></td>
    <td><code>array</code></td>
    <td>Model versions that were evaluated for generating predictions.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The event ID. (pattern: &lt;code&gt;^&#91;0-9a-z_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_timestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp for when the prediction was generated for the associated event ID.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type_name" /></td>
    <td><code>string</code></td>
    <td>The event type associated with the detector specified for this prediction. (pattern: &lt;code&gt;^&#91;0-9a-z_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_variables" /></td>
    <td><code>array</code></td>
    <td>A list of event variables that influenced the prediction scores.</td>
</tr>
<tr>
    <td><CopyableCode code="outcomes" /></td>
    <td><code>array</code></td>
    <td>The outcomes of the matched rule, based on the rule execution mode.</td>
</tr>
<tr>
    <td><CopyableCode code="prediction_timestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp that defines when the prediction was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_execution_mode" /></td>
    <td><code>string</code></td>
    <td>The execution mode of the rule used for evaluating variable values. (ALL_MATCHED, FIRST_MATCHED)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>List of rules associated with the detector version that were used for evaluating variable values.</td>
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
    <td><a href="#get_event_prediction_metadata"><CopyableCode code="get_event_prediction_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details of the past fraud predictions for the specified event ID, event type, detector ID, and detector version ID that was generated in the specified time period.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_event_prediction_metadata"
    values={[
        { label: 'get_event_prediction_metadata', value: 'get_event_prediction_metadata' }
    ]}
>
<TabItem value="get_event_prediction_metadata">

Gets details of the past fraud predictions for the specified event ID, event type, detector ID, and detector version ID that was generated in the specified time period.

```sql
SELECT
detector_id,
detector_version_id,
detector_version_status,
entity_id,
entity_type,
evaluated_external_models,
evaluated_model_versions,
event_id,
event_timestamp,
event_type_name,
event_variables,
outcomes,
prediction_timestamp,
rule_execution_mode,
rules
FROM aws.frauddetector.event_prediction_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
