--- 
title: license_specifications_for_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - license_specifications_for_resources
  - license_manager
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

Creates, updates, deletes, gets or lists a <code>license_specifications_for_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_specifications_for_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.license_specifications_for_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_license_specifications_for_resource"
    values={[
        { label: 'list_license_specifications_for_resource', value: 'list_license_specifications_for_resource' }
    ]}
>
<TabItem value="list_license_specifications_for_resource">

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
    <td><CopyableCode code="ami_association_scope" /></td>
    <td><code>string</code></td>
    <td>Scope of AMI associations. The possible value is cross-account.</td>
</tr>
<tr>
    <td><CopyableCode code="license_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the license configuration.</td>
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
    <td><a href="#list_license_specifications_for_resource"><CopyableCode code="list_license_specifications_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the license configurations for the specified resource.</td>
</tr>
<tr>
    <td><a href="#update_license_specifications_for_resource"><CopyableCode code="update_license_specifications_for_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Adds or removes the specified license configurations for the specified Amazon Web Services resource. You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.</td>
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
    defaultValue="list_license_specifications_for_resource"
    values={[
        { label: 'list_license_specifications_for_resource', value: 'list_license_specifications_for_resource' }
    ]}
>
<TabItem value="list_license_specifications_for_resource">

Describes the license configurations for the specified resource.

```sql
SELECT
ami_association_scope,
license_configuration_arn
FROM aws.license_manager.license_specifications_for_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_license_specifications_for_resource"
    values={[
        { label: 'update_license_specifications_for_resource', value: 'update_license_specifications_for_resource' }
    ]}
>
<TabItem value="update_license_specifications_for_resource">

Adds or removes the specified license configurations for the specified Amazon Web Services resource. You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.

```sql
UPDATE aws.license_manager.license_specifications_for_resources
SET 
ResourceArn = '{{ ResourceArn }}',
AddLicenseSpecifications = '{{ AddLicenseSpecifications }}',
RemoveLicenseSpecifications = '{{ RemoveLicenseSpecifications }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required;
```
</TabItem>
</Tabs>
