--- 
title: agreement_entitlements
hide_title: false
hide_table_of_contents: false
keywords:
  - agreement_entitlements
  - marketplace_agreement
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

Creates, updates, deletes, gets or lists an <code>agreement_entitlements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agreement_entitlements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_agreement.agreement_entitlements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agreement_entitlements"
    values={[
        { label: 'get_agreement_entitlements', value: 'get_agreement_entitlements' }
    ]}
>
<TabItem value="get_agreement_entitlements">

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
    <td><CopyableCode code="license_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AWS License Manager license associated with the entitlement. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registration_token" /></td>
    <td><code>string</code></td>
    <td>A short-lived token required by acceptors to register their account with the product provider. The token is only valid for 30 minutes after creation and is only applicable for purchase agreements. (pattern: &lt;code&gt;&#91;A-Za-z0-9+/=.:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The list of resources involved in the agreement.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of an entitlement. (PROVISIONED, SCHEDULED, PENDING, FAILED, DEPROVISIONED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason_code" /></td>
    <td><code>string</code></td>
    <td>Provides more information about the status of an entitlement. (PROVISIONING_IN_PROGRESS, FUTURE_START_DATE, INVALID_PAYMENT_INSTRUMENT, INCOMPATIBLE_CURRENCY, ACCOUNT_SUSPENDED, UNSUPPORTED_OPERATION, AGREEMENT_INACTIVE, AGREEMENT_ACTIVE, PRODUCT_RESTRICTED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of entitlement. (pattern: &lt;code&gt;&#91;A-Za-z:&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_agreement_entitlements"><CopyableCode code="get_agreement_entitlements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtains details about the entitlements of an agreement.</td>
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
    defaultValue="get_agreement_entitlements"
    values={[
        { label: 'get_agreement_entitlements', value: 'get_agreement_entitlements' }
    ]}
>
<TabItem value="get_agreement_entitlements">

Obtains details about the entitlements of an agreement.

```sql
SELECT
license_arn,
registration_token,
resource,
status,
status_reason_code,
type_
FROM aws.marketplace_agreement.agreement_entitlements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
