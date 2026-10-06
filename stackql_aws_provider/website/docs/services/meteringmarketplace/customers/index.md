--- 
title: customers
hide_title: false
hide_table_of_contents: false
keywords:
  - customers
  - meteringmarketplace
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

Creates, updates, deletes, gets or lists a <code>customers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="customers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.meteringmarketplace.customers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#resolve_customer"><CopyableCode code="resolve_customer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegistrationToken"><code>RegistrationToken</code></a></td>
    <td></td>
    <td>ResolveCustomer is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a CustomerIdentifier along with the CustomerAWSAccountId, ProductCode, and LicenseArn. For new SaaS product integrations, the CustomerIdentifier field is not populated in the ResolveCustomer API response. New integrations must use CustomerAWSAccountId and LicenseArn to identify customers. Existing integrations continue to work unchanged. To successfully resolve the token, the API must be called from the account that was used to publish the SaaS application. For an example of using ResolveCustomer, see ResolveCustomer code example in the Amazon Web Services Marketplace Seller Guide. Permission is required for this operation. Your IAM role or user performing this operation requires a policy to allow the aws-marketplace:ResolveCustomer action. For more information, see Actions, resources, and condition keys for Amazon Web Services Marketplace Metering Service in the Service Authorization Reference. For Amazon Web Services Regions that support ResolveCustomer, see ResolveCustomer Region support.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="resolve_customer"
    values={[
        { label: 'resolve_customer', value: 'resolve_customer' }
    ]}
>
<TabItem value="resolve_customer">

ResolveCustomer is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a CustomerIdentifier along with the CustomerAWSAccountId, ProductCode, and LicenseArn. For new SaaS product integrations, the CustomerIdentifier field is not populated in the ResolveCustomer API response. New integrations must use CustomerAWSAccountId and LicenseArn to identify customers. Existing integrations continue to work unchanged. To successfully resolve the token, the API must be called from the account that was used to publish the SaaS application. For an example of using ResolveCustomer, see ResolveCustomer code example in the Amazon Web Services Marketplace Seller Guide. Permission is required for this operation. Your IAM role or user performing this operation requires a policy to allow the aws-marketplace:ResolveCustomer action. For more information, see Actions, resources, and condition keys for Amazon Web Services Marketplace Metering Service in the Service Authorization Reference. For Amazon Web Services Regions that support ResolveCustomer, see ResolveCustomer Region support.

```sql
EXEC aws.meteringmarketplace.customers.resolve_customer 
@region='{{ region }}' --required 
@@json=
'{
"RegistrationToken": "{{ RegistrationToken }}"
}'
;
```
</TabItem>
</Tabs>
