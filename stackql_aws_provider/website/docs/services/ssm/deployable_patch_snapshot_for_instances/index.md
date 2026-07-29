--- 
title: deployable_patch_snapshot_for_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - deployable_patch_snapshot_for_instances
  - ssm
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

Creates, updates, deletes, gets or lists a <code>deployable_patch_snapshot_for_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployable_patch_snapshot_for_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.deployable_patch_snapshot_for_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployable_patch_snapshot_for_instance"
    values={[
        { label: 'get_deployable_patch_snapshot_for_instance', value: 'get_deployable_patch_snapshot_for_instance' }
    ]}
>
<TabItem value="get_deployable_patch_snapshot_for_instance">

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
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The managed node ID. (pattern: &lt;code&gt;(^i-(\w&#123;8&#125;|\w&#123;17&#125;)$)|(^mi-\w&#123;17&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Returns the specific operating system (for example Windows Server 2012 or Amazon Linux 2015.09) on the managed node for the specified patch snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_download_url" /></td>
    <td><code>string</code></td>
    <td>A pre-signed Amazon Simple Storage Service (Amazon S3) URL that can be used to download the patch snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The user-defined snapshot ID. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_deployable_patch_snapshot_for_instance"><CopyableCode code="get_deployable_patch_snapshot_for_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current snapshot for the patch baseline the managed node uses. This API is primarily used by the AWS-RunPatchBaseline Systems Manager document (SSM document). If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a tool in Amazon Web Services Systems Manager, with an SSM document that enables you to target a managed node with a script or command. For example, run the command using the AWS-RunShellScript document or the AWS-RunPowerShellScript document.</td>
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
    defaultValue="get_deployable_patch_snapshot_for_instance"
    values={[
        { label: 'get_deployable_patch_snapshot_for_instance', value: 'get_deployable_patch_snapshot_for_instance' }
    ]}
>
<TabItem value="get_deployable_patch_snapshot_for_instance">

Retrieves the current snapshot for the patch baseline the managed node uses. This API is primarily used by the AWS-RunPatchBaseline Systems Manager document (SSM document). If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a tool in Amazon Web Services Systems Manager, with an SSM document that enables you to target a managed node with a script or command. For example, run the command using the AWS-RunShellScript document or the AWS-RunPowerShellScript document.

```sql
SELECT
instance_id,
product,
snapshot_download_url,
snapshot_id
FROM aws.ssm.deployable_patch_snapshot_for_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
