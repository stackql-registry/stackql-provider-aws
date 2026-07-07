--- 
title: products
hide_title: false
hide_table_of_contents: false
keywords:
  - products
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>products</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="products" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.products" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_products"
    values={[
        { label: 'describe_products', value: 'describe_products' }
    ]}
>
<TabItem value="describe_products">

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
    <td><CopyableCode code="ActivationUrl" /></td>
    <td><code>string</code></td>
    <td>The URL to the service or product documentation about the integration with Security Hub CSPM, including how to activate the integration. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Categories" /></td>
    <td><code>array</code></td>
    <td>The categories assigned to the product.</td>
</tr>
<tr>
    <td><CopyableCode code="CompanyName" /></td>
    <td><code>string</code></td>
    <td>The name of the company that provides the product. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the product. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IntegrationTypes" /></td>
    <td><code>array</code></td>
    <td>The types of integration that the product supports. Available values are the following. SEND_FINDINGS_TO_SECURITY_HUB - The integration sends findings to Security Hub CSPM. RECEIVE_FINDINGS_FROM_SECURITY_HUB - The integration receives findings from Security Hub CSPM. UPDATE_FINDINGS_IN_SECURITY_HUB - The integration does not send new findings to Security Hub CSPM, but does make updates to the findings that it receives from Security Hub CSPM.</td>
</tr>
<tr>
    <td><CopyableCode code="MarketplaceUrl" /></td>
    <td><code>string</code></td>
    <td>For integrations with Amazon Web Services services, the Amazon Web Services Console URL from which to activate the service. For integrations with third-party products, the Amazon Web Services Marketplace URL from which to subscribe to or purchase the product. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProductArn" /></td>
    <td><code>string</code></td>
    <td>The ARN assigned to the product. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProductName" /></td>
    <td><code>string</code></td>
    <td>The name of the product. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProductSubscriptionResourcePolicy" /></td>
    <td><code>string</code></td>
    <td>The resource policy associated with the product. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_products"><CopyableCode code="describe_products" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-ProductArn"><code>ProductArn</code></a></td>
    <td>Returns information about product integrations in Security Hub CSPM. You can optionally provide an integration ARN. If you provide an integration ARN, then the results only include that integration. If you don't provide an integration ARN, then the results include all of the available product integrations.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that is required for pagination. On your first call to the DescribeProducts operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</td>
</tr>
<tr id="parameter-ProductArn">
    <td><CopyableCode code="ProductArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the integration to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_products"
    values={[
        { label: 'describe_products', value: 'describe_products' }
    ]}
>
<TabItem value="describe_products">

Returns information about product integrations in Security Hub CSPM. You can optionally provide an integration ARN. If you provide an integration ARN, then the results only include that integration. If you don't provide an integration ARN, then the results include all of the available product integrations.

```sql
SELECT
ActivationUrl,
Categories,
CompanyName,
Description,
IntegrationTypes,
MarketplaceUrl,
ProductArn,
ProductName,
ProductSubscriptionResourcePolicy
FROM aws.securityhub.products
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND ProductArn = '{{ ProductArn }}'
;
```
</TabItem>
</Tabs>
