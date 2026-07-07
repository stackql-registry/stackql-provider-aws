--- 
title: resource_catalogs
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_catalogs
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>resource_catalogs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_catalogs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.resource_catalogs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_catalogs"
    values={[
        { label: 'list_resource_catalogs', value: 'list_resource_catalogs' }
    ]}
>
<TabItem value="list_resource_catalogs">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the ResourceCatalog was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A free form description of the ResourceCatalog.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceCatalogArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ResourceCatalog. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:sagemaker-catalog/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceCatalogName" /></td>
    <td><code>string</code></td>
    <td>The name of the ResourceCatalog.</td>
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
    <td><a href="#list_resource_catalogs"><CopyableCode code="list_resource_catalogs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists Amazon SageMaker Catalogs based on given filters and orders. The maximum number of ResourceCatalogs viewable is 1000.</td>
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
    defaultValue="list_resource_catalogs"
    values={[
        { label: 'list_resource_catalogs', value: 'list_resource_catalogs' }
    ]}
>
<TabItem value="list_resource_catalogs">

Lists Amazon SageMaker Catalogs based on given filters and orders. The maximum number of ResourceCatalogs viewable is 1000.

```sql
SELECT
CreationTime,
Description,
ResourceCatalogArn,
ResourceCatalogName
FROM aws.sagemaker.resource_catalogs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
