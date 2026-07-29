--- 
title: behavior_model_training_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - behavior_model_training_summaries
  - iot
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

Creates, updates, deletes, gets or lists a <code>behavior_model_training_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="behavior_model_training_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.behavior_model_training_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_behavior_model_training_summaries"
    values={[
        { label: 'get_behavior_model_training_summaries', value: 'get_behavior_model_training_summaries' }
    ]}
>
<TabItem value="get_behavior_model_training_summaries">

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
    <td><CopyableCode code="behavior_name" /></td>
    <td><code>string</code></td>
    <td>The name of the behavior. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datapoints_collection_percentage" /></td>
    <td><code>number (double)</code></td>
    <td>The percentage of datapoints collected.</td>
</tr>
<tr>
    <td><CopyableCode code="last_model_refresh_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the model was last refreshed.</td>
</tr>
<tr>
    <td><CopyableCode code="model_status" /></td>
    <td><code>string</code></td>
    <td>The status of the behavior model. (PENDING_BUILD, ACTIVE, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="security_profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of the security profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_data_collection_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date a training model started collecting data.</td>
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
    <td><a href="#get_behavior_model_training_summaries"><CopyableCode code="get_behavior_model_training_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-securityProfileName"><code>securityProfileName</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a Device Defender's ML Detect Security Profile training model's status. Requires permission to access the GetBehaviorModelTrainingSummaries action.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time. The default is 10.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
<tr id="parameter-securityProfileName">
    <td><CopyableCode code="securityProfileName" /></td>
    <td><code>string</code></td>
    <td>The name of the security profile.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_behavior_model_training_summaries"
    values={[
        { label: 'get_behavior_model_training_summaries', value: 'get_behavior_model_training_summaries' }
    ]}
>
<TabItem value="get_behavior_model_training_summaries">

Returns a Device Defender's ML Detect Security Profile training model's status. Requires permission to access the GetBehaviorModelTrainingSummaries action.

```sql
SELECT
behavior_name,
datapoints_collection_percentage,
last_model_refresh_date,
model_status,
security_profile_name,
training_data_collection_start_date
FROM aws.iot.behavior_model_training_summaries
WHERE region = '{{ region }}' -- required
AND securityProfileName = '{{ securityProfileName }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
