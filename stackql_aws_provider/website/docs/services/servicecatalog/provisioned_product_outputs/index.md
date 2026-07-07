--- 
title: provisioned_product_outputs
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioned_product_outputs
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>provisioned_product_outputs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provisioned_product_outputs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.provisioned_product_outputs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_provisioned_product_outputs"
    values={[
        { label: 'get_provisioned_product_outputs', value: 'get_provisioned_product_outputs' }
    ]}
>
<TabItem value="get_provisioned_product_outputs">

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
    <td><CopyableCode code="NextPageToken" /></td>
    <td><code>string</code></td>
    <td>The page token to use to retrieve the next set of results. If there are no additional results, this value is null. (pattern: &lt;code&gt;&#91;\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Outputs" /></td>
    <td><code>array</code></td>
    <td>Information about the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</td>
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
    <td><a href="#get_provisioned_product_outputs"><CopyableCode code="get_provisioned_product_outputs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API takes either a ProvisonedProductId or a ProvisionedProductName, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.</td>
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
    defaultValue="get_provisioned_product_outputs"
    values={[
        { label: 'get_provisioned_product_outputs', value: 'get_provisioned_product_outputs' }
    ]}
>
<TabItem value="get_provisioned_product_outputs">

This API takes either a ProvisonedProductId or a ProvisionedProductName, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.

```sql
SELECT
NextPageToken,
Outputs
FROM aws.servicecatalog.provisioned_product_outputs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
