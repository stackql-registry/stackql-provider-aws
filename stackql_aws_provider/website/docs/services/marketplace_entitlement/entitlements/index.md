--- 
title: entitlements
hide_title: false
hide_table_of_contents: false
keywords:
  - entitlements
  - marketplace_entitlement
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

Creates, updates, deletes, gets or lists an <code>entitlements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entitlements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_entitlement.entitlements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_entitlements"
    values={[
        { label: 'get_entitlements', value: 'get_entitlements' }
    ]}
>
<TabItem value="get_entitlements">

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
    <td><CopyableCode code="customer_aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The CustomerAWSAccountId parameter specifies the AWS account ID of the buyer. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_identifier" /></td>
    <td><code>string</code></td>
    <td>The customer identifier is a handle to each unique customer in an application. Customer identifiers are obtained through the ResolveCustomer operation in AWS Marketplace Metering Service. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dimension" /></td>
    <td><code>string</code></td>
    <td>The dimension for which the given entitlement applies. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration date represents the minimum date through which this entitlement is expected to remain valid. For contractual products listed on AWS Marketplace, the expiration date is the date at which the customer will renew or cancel their contract. Customers who are opting to renew their contract will still have entitlements with an expiration date.</td>
</tr>
<tr>
    <td><CopyableCode code="license_arn" /></td>
    <td><code>string</code></td>
    <td>The LicenseArn is a unique identifier for a specific granted license. These are used for software purchased through AWS Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="product_code" /></td>
    <td><code>string</code></td>
    <td>The product code for which the given entitlement applies. Product codes are provided by AWS Marketplace when the product listing is created.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>object</code></td>
    <td>The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.</td>
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
    <td><a href="#get_entitlements"><CopyableCode code="get_entitlements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier, AWS account ID, license ARN, or product dimensions.</td>
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
    defaultValue="get_entitlements"
    values={[
        { label: 'get_entitlements', value: 'get_entitlements' }
    ]}
>
<TabItem value="get_entitlements">

GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier, AWS account ID, license ARN, or product dimensions.

```sql
SELECT
customer_aws_account_id,
customer_identifier,
dimension,
expiration_date,
license_arn,
product_code,
value
FROM aws.marketplace_entitlement.entitlements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
