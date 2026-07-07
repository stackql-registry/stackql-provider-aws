--- 
title: patch_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - patch_properties
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

Creates, updates, deletes, gets or lists a <code>patch_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="patch_properties" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.patch_properties" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_patch_properties"
    values={[
        { label: 'describe_patch_properties', value: 'describe_patch_properties' }
    ]}
>
<TabItem value="describe_patch_properties">

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
    <td><CopyableCode code="property" /></td>
    <td><code>object</code></td>
    <td>A list of the properties for patches matching the filter request parameters.</td>
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
    <td><a href="#describe_patch_properties"><CopyableCode code="describe_patch_properties" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for operations such as CreatePatchBaseline, UpdatePatchBaseline, DescribeAvailablePatches, and DescribePatchBaselines. The following section lists the properties that can be used in filters for each major operating system type: AMAZON_LINUX Valid properties: PRODUCT | CLASSIFICATION | SEVERITY AMAZON_LINUX_2 Valid properties: PRODUCT | CLASSIFICATION | SEVERITY AMAZON_LINUX_2023 Valid properties: PRODUCT | CLASSIFICATION | SEVERITY CENTOS Valid properties: PRODUCT | CLASSIFICATION | SEVERITY DEBIAN Valid properties: PRODUCT | PRIORITY MACOS Valid properties: PRODUCT | CLASSIFICATION ORACLE_LINUX Valid properties: PRODUCT | CLASSIFICATION | SEVERITY REDHAT_ENTERPRISE_LINUX Valid properties: PRODUCT | CLASSIFICATION | SEVERITY SUSE Valid properties: PRODUCT | CLASSIFICATION | SEVERITY UBUNTU Valid properties: PRODUCT | PRIORITY WINDOWS Valid properties: PRODUCT | PRODUCT_FAMILY | CLASSIFICATION | MSRC_SEVERITY</td>
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
    defaultValue="describe_patch_properties"
    values={[
        { label: 'describe_patch_properties', value: 'describe_patch_properties' }
    ]}
>
<TabItem value="describe_patch_properties">

Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for operations such as CreatePatchBaseline, UpdatePatchBaseline, DescribeAvailablePatches, and DescribePatchBaselines. The following section lists the properties that can be used in filters for each major operating system type: AMAZON_LINUX Valid properties: PRODUCT | CLASSIFICATION | SEVERITY AMAZON_LINUX_2 Valid properties: PRODUCT | CLASSIFICATION | SEVERITY AMAZON_LINUX_2023 Valid properties: PRODUCT | CLASSIFICATION | SEVERITY CENTOS Valid properties: PRODUCT | CLASSIFICATION | SEVERITY DEBIAN Valid properties: PRODUCT | PRIORITY MACOS Valid properties: PRODUCT | CLASSIFICATION ORACLE_LINUX Valid properties: PRODUCT | CLASSIFICATION | SEVERITY REDHAT_ENTERPRISE_LINUX Valid properties: PRODUCT | CLASSIFICATION | SEVERITY SUSE Valid properties: PRODUCT | CLASSIFICATION | SEVERITY UBUNTU Valid properties: PRODUCT | PRIORITY WINDOWS Valid properties: PRODUCT | PRODUCT_FAMILY | CLASSIFICATION | MSRC_SEVERITY

```sql
SELECT
property
FROM aws.ssm.patch_properties
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
