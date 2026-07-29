--- 
title: enabled_baselines
hide_title: false
hide_table_of_contents: false
keywords:
  - enabled_baselines
  - controltower
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

Creates, updates, deletes, gets or lists an <code>enabled_baselines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enabled_baselines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.controltower.enabled_baselines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_enabled_baseline"
    values={[
        { label: 'get_enabled_baseline', value: 'get_enabled_baseline' },
        { label: 'list_enabled_baselines', value: 'list_enabled_baselines' }
    ]}
>
<TabItem value="get_enabled_baseline">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the EnabledBaseline resource. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="baseline_identifier" /></td>
    <td><code>string</code></td>
    <td>The specific Baseline enabled as part of the EnabledBaseline resource.</td>
</tr>
<tr>
    <td><CopyableCode code="baseline_version" /></td>
    <td><code>string</code></td>
    <td>The enabled version of the Baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="drift_status_summary" /></td>
    <td><code>object</code></td>
    <td>The drift status of the enabled baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>Shows the parameters that are applied when enabling this Baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_identifier" /></td>
    <td><code>string</code></td>
    <td>An ARN that represents the parent EnabledBaseline at the Organizational Unit (OU) level, from which the child EnabledBaseline inherits its configuration. The value is returned by GetEnabledBaseline. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status_summary" /></td>
    <td><code>object</code></td>
    <td>The deployment summary of an EnabledControl or EnabledBaseline resource.</td>
</tr>
<tr>
    <td><CopyableCode code="target_identifier" /></td>
    <td><code>string</code></td>
    <td>The target on which to enable the Baseline.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_enabled_baselines">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the EnabledBaseline resource (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="baseline_identifier" /></td>
    <td><code>string</code></td>
    <td>The specific baseline that is enabled as part of the EnabledBaseline resource.</td>
</tr>
<tr>
    <td><CopyableCode code="baseline_version" /></td>
    <td><code>string</code></td>
    <td>The enabled version of the baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="drift_status_summary" /></td>
    <td><code>object</code></td>
    <td>The drift status of the enabled baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_identifier" /></td>
    <td><code>string</code></td>
    <td>An ARN that represents an object returned by ListEnabledBaseline, to describe an enabled baseline. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status_summary" /></td>
    <td><code>object</code></td>
    <td>The deployment summary of an EnabledControl or EnabledBaseline resource.</td>
</tr>
<tr>
    <td><CopyableCode code="target_identifier" /></td>
    <td><code>string</code></td>
    <td>The target upon which the baseline is enabled.</td>
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
    <td><a href="#get_enabled_baseline"><CopyableCode code="get_enabled_baseline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve details of an EnabledBaseline resource by specifying its identifier.</td>
</tr>
<tr>
    <td><a href="#list_enabled_baselines"><CopyableCode code="list_enabled_baselines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of summaries describing EnabledBaseline resources. You can filter the list by the corresponding Baseline or Target of the EnabledBaseline resources. For usage examples, see the Amazon Web Services Control Tower User Guide .</td>
</tr>
<tr>
    <td><a href="#update_enabled_baseline"><CopyableCode code="update_enabled_baseline" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-baselineVersion"><code>baselineVersion</code></a>, <a href="#parameter-enabledBaselineIdentifier"><code>enabledBaselineIdentifier</code></a></td>
    <td></td>
    <td>Updates an EnabledBaseline resource's applied parameters or version. For usage examples, see the Amazon Web Services Control Tower User Guide .</td>
</tr>
<tr>
    <td><a href="#reset_enabled_baseline"><CopyableCode code="reset_enabled_baseline" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-enabledBaselineIdentifier"><code>enabledBaselineIdentifier</code></a></td>
    <td></td>
    <td>Re-enables an EnabledBaseline resource. For example, this API can re-apply the existing Baseline after a new member account is moved to the target OU. For usage examples, see the Amazon Web Services Control Tower User Guide .</td>
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
    defaultValue="get_enabled_baseline"
    values={[
        { label: 'get_enabled_baseline', value: 'get_enabled_baseline' },
        { label: 'list_enabled_baselines', value: 'list_enabled_baselines' }
    ]}
>
<TabItem value="get_enabled_baseline">

Retrieve details of an EnabledBaseline resource by specifying its identifier.

```sql
SELECT
arn,
baseline_identifier,
baseline_version,
drift_status_summary,
parameters,
parent_identifier,
status_summary,
target_identifier
FROM aws.controltower.enabled_baselines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_enabled_baselines">

Returns a list of summaries describing EnabledBaseline resources. You can filter the list by the corresponding Baseline or Target of the EnabledBaseline resources. For usage examples, see the Amazon Web Services Control Tower User Guide .

```sql
SELECT
arn,
baseline_identifier,
baseline_version,
drift_status_summary,
parent_identifier,
status_summary,
target_identifier
FROM aws.controltower.enabled_baselines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_enabled_baseline"
    values={[
        { label: 'update_enabled_baseline', value: 'update_enabled_baseline' }
    ]}
>
<TabItem value="update_enabled_baseline">

Updates an EnabledBaseline resource's applied parameters or version. For usage examples, see the Amazon Web Services Control Tower User Guide .

```sql
UPDATE aws.controltower.enabled_baselines
SET 
baselineVersion = '{{ baselineVersion }}',
parameters = '{{ parameters }}',
enabledBaselineIdentifier = '{{ enabledBaselineIdentifier }}'
WHERE 
region = '{{ region }}' --required
AND baselineVersion = '{{ baselineVersion }}' --required
AND enabledBaselineIdentifier = '{{ enabledBaselineIdentifier }}' --required
RETURNING
operation_identifier;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_enabled_baseline"
    values={[
        { label: 'reset_enabled_baseline', value: 'reset_enabled_baseline' }
    ]}
>
<TabItem value="reset_enabled_baseline">

Re-enables an EnabledBaseline resource. For example, this API can re-apply the existing Baseline after a new member account is moved to the target OU. For usage examples, see the Amazon Web Services Control Tower User Guide .

```sql
EXEC aws.controltower.enabled_baselines.reset_enabled_baseline 
@region='{{ region }}' --required 
@@json=
'{
"enabledBaselineIdentifier": "{{ enabledBaselineIdentifier }}"
}'
;
```
</TabItem>
</Tabs>
