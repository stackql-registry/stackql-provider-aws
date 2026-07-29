--- 
title: retraining_schedulers
hide_title: false
hide_table_of_contents: false
keywords:
  - retraining_schedulers
  - lookoutequipment
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

Creates, updates, deletes, gets or lists a <code>retraining_schedulers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="retraining_schedulers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lookoutequipment.retraining_schedulers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_retraining_scheduler"
    values={[
        { label: 'describe_retraining_scheduler', value: 'describe_retraining_scheduler' },
        { label: 'list_retraining_schedulers', value: 'list_retraining_schedulers' }
    ]}
>
<TabItem value="describe_retraining_scheduler">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time and date at which the retraining scheduler was created.</td>
</tr>
<tr>
    <td><CopyableCode code="lookback_window" /></td>
    <td><code>string</code></td>
    <td>The number of past days of data used for retraining. (pattern: &lt;code&gt;^P180D$|^P360D$|^P540D$|^P720D$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the model that the retraining scheduler is attached to. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:model\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the model that the retraining scheduler is attached to. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="promote_mode" /></td>
    <td><code>string</code></td>
    <td>Indicates how the service uses new models. In MANAGED mode, new models are used for inference if they have better performance than the current model. In MANUAL mode, the new models are not used until they are manually activated. (MANAGED, MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="retraining_frequency" /></td>
    <td><code>string</code></td>
    <td>The frequency at which the model retraining is set. This follows the ISO 8601 guidelines. (pattern: &lt;code&gt;^P(\dY)?(\d&#123;1,2&#125;M)?(\d&#123;1,3&#125;D)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retraining_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the nearest UTC day.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the retraining scheduler. (PENDING, RUNNING, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time and date at which the retraining scheduler was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_retraining_schedulers">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If the number of results exceeds the maximum, this pagination token is returned. Use this token in the request to show the next page of retraining schedulers. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retraining_scheduler_summaries" /></td>
    <td><code>array</code></td>
    <td>Provides information on the specified retraining scheduler, including the model name, model ARN, status, and start date.</td>
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
    <td><a href="#describe_retraining_scheduler"><CopyableCode code="describe_retraining_scheduler" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a description of the retraining scheduler, including information such as the model name and retraining parameters.</td>
</tr>
<tr>
    <td><a href="#list_retraining_schedulers"><CopyableCode code="list_retraining_schedulers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all retraining schedulers in your account, filtering by model name prefix and status.</td>
</tr>
<tr>
    <td><a href="#create_retraining_scheduler"><CopyableCode code="create_retraining_scheduler" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelName"><code>ModelName</code></a>, <a href="#parameter-RetrainingFrequency"><code>RetrainingFrequency</code></a>, <a href="#parameter-LookbackWindow"><code>LookbackWindow</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a retraining scheduler on the specified model.</td>
</tr>
<tr>
    <td><a href="#update_retraining_scheduler"><CopyableCode code="update_retraining_scheduler" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelName"><code>ModelName</code></a></td>
    <td></td>
    <td>Updates a retraining scheduler.</td>
</tr>
<tr>
    <td><a href="#delete_retraining_scheduler"><CopyableCode code="delete_retraining_scheduler" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a retraining scheduler from a model. The retraining scheduler must be in the STOPPED status.</td>
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
    defaultValue="describe_retraining_scheduler"
    values={[
        { label: 'describe_retraining_scheduler', value: 'describe_retraining_scheduler' },
        { label: 'list_retraining_schedulers', value: 'list_retraining_schedulers' }
    ]}
>
<TabItem value="describe_retraining_scheduler">

Provides a description of the retraining scheduler, including information such as the model name and retraining parameters.

```sql
SELECT
created_at,
lookback_window,
model_arn,
model_name,
promote_mode,
retraining_frequency,
retraining_start_date,
status,
updated_at
FROM aws.lookoutequipment.retraining_schedulers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_retraining_schedulers">

Lists all retraining schedulers in your account, filtering by model name prefix and status.

```sql
SELECT
next_token,
retraining_scheduler_summaries
FROM aws.lookoutequipment.retraining_schedulers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_retraining_scheduler"
    values={[
        { label: 'create_retraining_scheduler', value: 'create_retraining_scheduler' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_retraining_scheduler">

Creates a retraining scheduler on the specified model.

```sql
INSERT INTO aws.lookoutequipment.retraining_schedulers (
ModelName,
RetrainingStartDate,
RetrainingFrequency,
LookbackWindow,
PromoteMode,
ClientToken,
region
)
SELECT 
'{{ ModelName }}' /* required */,
'{{ RetrainingStartDate }}',
'{{ RetrainingFrequency }}' /* required */,
'{{ LookbackWindow }}' /* required */,
'{{ PromoteMode }}',
'{{ ClientToken }}' /* required */,
'{{ region }}'
RETURNING
model_arn,
model_name,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: retraining_schedulers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the retraining_schedulers resource.
    - name: ModelName
      value: "{{ ModelName }}"
      description: |
        The name of the model to add the retraining scheduler to.
    - name: RetrainingStartDate
      value: "{{ RetrainingStartDate }}"
      description: |
        The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the nearest UTC day.
    - name: RetrainingFrequency
      value: "{{ RetrainingFrequency }}"
      description: |
        This parameter uses the ISO 8601 standard to set the frequency at which you want retraining to occur in terms of Years, Months, and/or Days (note: other parameters like Time are not currently supported). The minimum value is 30 days (P30D) and the maximum value is 1 year (P1Y). For example, the following values are valid: P3M15D – Every 3 months and 15 days P2M – Every 2 months P150D – Every 150 days
    - name: LookbackWindow
      value: "{{ LookbackWindow }}"
      description: |
        The number of past days of data that will be used for retraining.
    - name: PromoteMode
      value: "{{ PromoteMode }}"
      description: |
        Indicates how the service will use new models. In MANAGED mode, new models will automatically be used for inference if they have better performance than the current model. In MANUAL mode, the new models will not be used until they are manually activated.
      valid_values: ['MANAGED', 'MANUAL']
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_retraining_scheduler"
    values={[
        { label: 'update_retraining_scheduler', value: 'update_retraining_scheduler' }
    ]}
>
<TabItem value="update_retraining_scheduler">

Updates a retraining scheduler.

```sql
UPDATE aws.lookoutequipment.retraining_schedulers
SET 
ModelName = '{{ ModelName }}',
RetrainingStartDate = '{{ RetrainingStartDate }}',
RetrainingFrequency = '{{ RetrainingFrequency }}',
LookbackWindow = '{{ LookbackWindow }}',
PromoteMode = '{{ PromoteMode }}'
WHERE 
region = '{{ region }}' --required
AND ModelName = '{{ ModelName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_retraining_scheduler"
    values={[
        { label: 'delete_retraining_scheduler', value: 'delete_retraining_scheduler' }
    ]}
>
<TabItem value="delete_retraining_scheduler">

Deletes a retraining scheduler from a model. The retraining scheduler must be in the STOPPED status.

```sql
DELETE FROM aws.lookoutequipment.retraining_schedulers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
