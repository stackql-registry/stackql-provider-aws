--- 
title: experiments
hide_title: false
hide_table_of_contents: false
keywords:
  - experiments
  - fis
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

Creates, updates, deletes, gets or lists an <code>experiments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experiments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fis.experiments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_experiment"
    values={[
        { label: 'get_experiment', value: 'get_experiment' },
        { label: 'list_experiments', value: 'list_experiments' }
    ]}
>
<TabItem value="get_experiment">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the experiment. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>object</code></td>
    <td>The actions for the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the experiment. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the experiment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the experiment ended.</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_options" /></td>
    <td><code>object</code></td>
    <td>The experiment options for the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_report" /></td>
    <td><code>object</code></td>
    <td>The experiment report for the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_report_configuration" /></td>
    <td><code>object</code></td>
    <td>The experiment report configuration for the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the experiment template. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="log_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for experiment logging.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the experiment started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>The state of the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="stop_conditions" /></td>
    <td><code>array</code></td>
    <td>The stop conditions for the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags for the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="target_account_configurations_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The count of target account configurations for the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>object</code></td>
    <td>The targets for the experiment.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_experiments">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the experiment. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the experiment. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the experiment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_options" /></td>
    <td><code>object</code></td>
    <td>The experiment options for the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the experiment template. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>The state of the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags for the experiment.</td>
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
    <td><a href="#get_experiment"><CopyableCode code="get_experiment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified experiment.</td>
</tr>
<tr>
    <td><a href="#list_experiments"><CopyableCode code="list_experiments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-experimentTemplateId"><code>experimentTemplateId</code></a></td>
    <td>Lists your experiments.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the experiment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-experimentTemplateId">
    <td><CopyableCode code="experimentTemplateId" /></td>
    <td><code>string</code></td>
    <td>The ID of the experiment template.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_experiment"
    values={[
        { label: 'get_experiment', value: 'get_experiment' },
        { label: 'list_experiments', value: 'list_experiments' }
    ]}
>
<TabItem value="get_experiment">

Gets information about the specified experiment.

```sql
SELECT
id,
actions,
arn,
creation_time,
end_time,
experiment_options,
experiment_report,
experiment_report_configuration,
experiment_template_id,
log_configuration,
role_arn,
start_time,
state,
stop_conditions,
tags,
target_account_configurations_count,
targets
FROM aws.fis.experiments
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_experiments">

Lists your experiments.

```sql
SELECT
id,
arn,
creation_time,
experiment_options,
experiment_template_id,
state,
tags
FROM aws.fis.experiments
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND experimentTemplateId = '{{ experimentTemplateId }}'
;
```
</TabItem>
</Tabs>
