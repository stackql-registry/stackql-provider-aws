--- 
title: launch_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_configurations
  - drs
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

Creates, updates, deletes, gets or lists a <code>launch_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="launch_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.launch_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_launch_configuration"
    values={[
        { label: 'get_launch_configuration', value: 'get_launch_configuration' }
    ]}
>
<TabItem value="get_launch_configuration">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the launch configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="copyPrivateIp" /></td>
    <td><code>boolean</code></td>
    <td>Whether we should copy the Private IP of the Source Server to the Recovery Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="copyTags" /></td>
    <td><code>boolean</code></td>
    <td>Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ec2LaunchTemplateID" /></td>
    <td><code>string</code></td>
    <td>The EC2 launch template ID of this launch configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="launchDisposition" /></td>
    <td><code>string</code></td>
    <td>The state of the Recovery Instance in EC2 after the recovery operation. (STOPPED, STARTED)</td>
</tr>
<tr>
    <td><CopyableCode code="launchIntoInstanceProperties" /></td>
    <td><code>object</code></td>
    <td>Launch into existing instance properties.</td>
</tr>
<tr>
    <td><CopyableCode code="licensing" /></td>
    <td><code>object</code></td>
    <td>Configuration of a machine's license.</td>
</tr>
<tr>
    <td><CopyableCode code="postLaunchEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether we want to activate post-launch actions for the Source Server.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceServerID" /></td>
    <td><code>string</code></td>
    <td>The ID of the Source Server for this launch configuration. (pattern: &lt;code&gt;s-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="targetInstanceTypeRightSizingMethod" /></td>
    <td><code>string</code></td>
    <td>Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server. (NONE, BASIC, IN_AWS)</td>
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
    <td><a href="#get_launch_configuration"><CopyableCode code="get_launch_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a LaunchConfiguration, filtered by Source Server IDs.</td>
</tr>
<tr>
    <td><a href="#update_launch_configuration"><CopyableCode code="update_launch_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceServerID"><code>sourceServerID</code></a></td>
    <td></td>
    <td>Updates a LaunchConfiguration by Source Server ID.</td>
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
    defaultValue="get_launch_configuration"
    values={[
        { label: 'get_launch_configuration', value: 'get_launch_configuration' }
    ]}
>
<TabItem value="get_launch_configuration">

Gets a LaunchConfiguration, filtered by Source Server IDs.

```sql
SELECT
name,
copyPrivateIp,
copyTags,
ec2LaunchTemplateID,
launchDisposition,
launchIntoInstanceProperties,
licensing,
postLaunchEnabled,
sourceServerID,
targetInstanceTypeRightSizingMethod
FROM aws.drs.launch_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_launch_configuration"
    values={[
        { label: 'update_launch_configuration', value: 'update_launch_configuration' }
    ]}
>
<TabItem value="update_launch_configuration">

Updates a LaunchConfiguration by Source Server ID.

```sql
UPDATE aws.drs.launch_configurations
SET 
sourceServerID = '{{ sourceServerID }}',
name = '{{ name }}',
launchDisposition = '{{ launchDisposition }}',
targetInstanceTypeRightSizingMethod = '{{ targetInstanceTypeRightSizingMethod }}',
copyPrivateIp = {{ copyPrivateIp }},
copyTags = {{ copyTags }},
licensing = '{{ licensing }}',
postLaunchEnabled = {{ postLaunchEnabled }},
launchIntoInstanceProperties = '{{ launchIntoInstanceProperties }}'
WHERE 
region = '{{ region }}' --required
AND sourceServerID = '{{ sourceServerID }}' --required
RETURNING
name,
copyPrivateIp,
copyTags,
ec2LaunchTemplateID,
launchDisposition,
launchIntoInstanceProperties,
licensing,
postLaunchEnabled,
sourceServerID,
targetInstanceTypeRightSizingMethod;
```
</TabItem>
</Tabs>
