--- 
title: enabled_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - enabled_controls
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

Creates, updates, deletes, gets or lists an <code>enabled_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enabled_controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.controltower.enabled_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_enabled_control"
    values={[
        { label: 'get_enabled_control', value: 'get_enabled_control' },
        { label: 'list_enabled_controls', value: 'list_enabled_controls' }
    ]}
>
<TabItem value="get_enabled_control">

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
    <td>The ARN of the enabled control. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="controlIdentifier" /></td>
    <td><code>string</code></td>
    <td>The control identifier of the enabled control. For information on how to find the controlIdentifier, see the overview page. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="driftStatusSummary" /></td>
    <td><code>object</code></td>
    <td>The drift status of the enabled control.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>Array of EnabledControlParameter objects.</td>
</tr>
<tr>
    <td><CopyableCode code="parentIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of the parent enabled control from which this control inherits its configuration, if applicable. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="statusSummary" /></td>
    <td><code>object</code></td>
    <td>The deployment summary of an EnabledControl or EnabledBaseline resource.</td>
</tr>
<tr>
    <td><CopyableCode code="targetIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of the organizational unit. For information on how to find the targetIdentifier, see the overview page. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="targetRegions" /></td>
    <td><code>array</code></td>
    <td>Target Amazon Web Services Regions for the enabled control.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_enabled_controls">

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
    <td>The ARN of the enabled control. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="controlIdentifier" /></td>
    <td><code>string</code></td>
    <td>The controlIdentifier of the enabled control. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="driftStatusSummary" /></td>
    <td><code>object</code></td>
    <td>The drift status of the enabled control.</td>
</tr>
<tr>
    <td><CopyableCode code="parentIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of the parent enabled control from which this control inherits its configuration, if applicable. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="statusSummary" /></td>
    <td><code>object</code></td>
    <td>The deployment summary of an EnabledControl or EnabledBaseline resource.</td>
</tr>
<tr>
    <td><CopyableCode code="targetIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of the organizational unit. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_enabled_control"><CopyableCode code="get_enabled_control" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about an enabled control. For usage examples, see the Controls Reference Guide .</td>
</tr>
<tr>
    <td><a href="#list_enabled_controls"><CopyableCode code="list_enabled_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the controls enabled by Amazon Web Services Control Tower on the specified organizational unit and the accounts it contains. For usage examples, see the Controls Reference Guide .</td>
</tr>
<tr>
    <td><a href="#update_enabled_control"><CopyableCode code="update_enabled_control" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-parameters"><code>parameters</code></a>, <a href="#parameter-enabledControlIdentifier"><code>enabledControlIdentifier</code></a></td>
    <td></td>
    <td>Updates the configuration of an already enabled control. If the enabled control shows an EnablementStatus of SUCCEEDED, supply parameters that are different from the currently configured parameters. Otherwise, Amazon Web Services Control Tower will not accept the request. If the enabled control shows an EnablementStatus of FAILED, Amazon Web Services Control Tower updates the control to match any valid parameters that you supply. If the DriftSummary status for the control shows as DRIFTED, you cannot call this API. Instead, you can update the control by calling the ResetEnabledControl API. Alternatively, you can call DisableControl and then call EnableControl again. Also, you can run an extending governance operation to repair drift. For usage examples, see the Controls Reference Guide .</td>
</tr>
<tr>
    <td><a href="#reset_enabled_control"><CopyableCode code="reset_enabled_control" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-enabledControlIdentifier"><code>enabledControlIdentifier</code></a></td>
    <td></td>
    <td>Resets an enabled control. Does not work for controls implemented with SCPs.</td>
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
    defaultValue="get_enabled_control"
    values={[
        { label: 'get_enabled_control', value: 'get_enabled_control' },
        { label: 'list_enabled_controls', value: 'list_enabled_controls' }
    ]}
>
<TabItem value="get_enabled_control">

Retrieves details about an enabled control. For usage examples, see the Controls Reference Guide .

```sql
SELECT
arn,
controlIdentifier,
driftStatusSummary,
parameters,
parentIdentifier,
statusSummary,
targetIdentifier,
targetRegions
FROM aws.controltower.enabled_controls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_enabled_controls">

Lists the controls enabled by Amazon Web Services Control Tower on the specified organizational unit and the accounts it contains. For usage examples, see the Controls Reference Guide .

```sql
SELECT
arn,
controlIdentifier,
driftStatusSummary,
parentIdentifier,
statusSummary,
targetIdentifier
FROM aws.controltower.enabled_controls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_enabled_control"
    values={[
        { label: 'update_enabled_control', value: 'update_enabled_control' }
    ]}
>
<TabItem value="update_enabled_control">

Updates the configuration of an already enabled control. If the enabled control shows an EnablementStatus of SUCCEEDED, supply parameters that are different from the currently configured parameters. Otherwise, Amazon Web Services Control Tower will not accept the request. If the enabled control shows an EnablementStatus of FAILED, Amazon Web Services Control Tower updates the control to match any valid parameters that you supply. If the DriftSummary status for the control shows as DRIFTED, you cannot call this API. Instead, you can update the control by calling the ResetEnabledControl API. Alternatively, you can call DisableControl and then call EnableControl again. Also, you can run an extending governance operation to repair drift. For usage examples, see the Controls Reference Guide .

```sql
UPDATE aws.controltower.enabled_controls
SET 
parameters = '{{ parameters }}',
enabledControlIdentifier = '{{ enabledControlIdentifier }}'
WHERE 
region = '{{ region }}' --required
AND parameters = '{{ parameters }}' --required
AND enabledControlIdentifier = '{{ enabledControlIdentifier }}' --required
RETURNING
operationIdentifier;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_enabled_control"
    values={[
        { label: 'reset_enabled_control', value: 'reset_enabled_control' }
    ]}
>
<TabItem value="reset_enabled_control">

Resets an enabled control. Does not work for controls implemented with SCPs.

```sql
EXEC aws.controltower.enabled_controls.reset_enabled_control 
@region='{{ region }}' --required 
@@json=
'{
"enabledControlIdentifier": "{{ enabledControlIdentifier }}"
}'
;
```
</TabItem>
</Tabs>
