--- 
title: package_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - package_configurations
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

Creates, updates, deletes, gets or lists a <code>package_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="package_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.package_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_package_configuration"
    values={[
        { label: 'get_package_configuration', value: 'get_package_configuration' }
    ]}
>
<TabItem value="get_package_configuration">

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Job is enabled or not.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role that grants permission to the IoT jobs service to update the reserved named shadow when the job successfully completes.</td>
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
    <td><a href="#get_package_configuration"><CopyableCode code="get_package_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified software package's configuration. Requires permission to access the GetPackageConfiguration action.</td>
</tr>
<tr>
    <td><a href="#update_package_configuration"><CopyableCode code="update_package_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Updates the software package configuration. Requires permission to access the UpdatePackageConfiguration and iam:PassRole actions.</td>
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
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_package_configuration"
    values={[
        { label: 'get_package_configuration', value: 'get_package_configuration' }
    ]}
>
<TabItem value="get_package_configuration">

Gets information about the specified software package's configuration. Requires permission to access the GetPackageConfiguration action.

```sql
SELECT
enabled,
roleArn
FROM aws.iot.package_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_package_configuration"
    values={[
        { label: 'update_package_configuration', value: 'update_package_configuration' }
    ]}
>
<TabItem value="update_package_configuration">

Updates the software package configuration. Requires permission to access the UpdatePackageConfiguration and iam:PassRole actions.

```sql
UPDATE aws.iot.package_configurations
SET 
versionUpdateByJobsConfig = '{{ versionUpdateByJobsConfig }}'
WHERE 
region = '{{ region }}' --required
AND clientToken = '{{ clientToken}}';
```
</TabItem>
</Tabs>
