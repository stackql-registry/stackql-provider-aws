--- 
title: licenses
hide_title: false
hide_table_of_contents: false
keywords:
  - licenses
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

Creates, updates, deletes, gets or lists a <code>licenses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="licenses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.licenses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_license"
    values={[
        { label: 'get_license', value: 'get_license' },
        { label: 'list_licenses', value: 'list_licenses' }
    ]}
>
<TabItem value="get_license">

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
    <td><CopyableCode code="beneficiary" /></td>
    <td><code>string</code></td>
    <td>License beneficiary.</td>
</tr>
<tr>
    <td><CopyableCode code="consumption_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for consumption of the license.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>License creation time. (pattern: &lt;code&gt;^(-?(?:&#91;1-9&#93;&#91;0-9&#93;*)?&#91;0-9&#93;&#123;4&#125;)-(1&#91;0-2&#93;|0&#91;1-9&#93;)-(3&#91;0-1&#93;|0&#91;1-9&#93;|&#91;1-2&#93;&#91;0-9&#93;)T(2&#91;0-3&#93;|&#91;0-1&#93;&#91;0-9&#93;):(&#91;0-5&#93;&#91;0-9&#93;):(&#91;0-5&#93;&#91;0-9&#93;)(\.&#91;0-9&#93;+)?(Z|&#91;+-&#93;(?:2&#91; 0-3&#93;|&#91;0-1&#93;&#91;0-9&#93;):&#91;0-5&#93;&#91;0-9&#93;)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="entitlements" /></td>
    <td><code>array</code></td>
    <td>License entitlements.</td>
</tr>
<tr>
    <td><CopyableCode code="home_region" /></td>
    <td><code>string</code></td>
    <td>Home Region of the license.</td>
</tr>
<tr>
    <td><CopyableCode code="issuer" /></td>
    <td><code>object</code></td>
    <td>License issuer.</td>
</tr>
<tr>
    <td><CopyableCode code="license_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the license. (pattern: &lt;code&gt;^arn:aws&#91;a-zA-Z-&#93;*:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="license_metadata" /></td>
    <td><code>array</code></td>
    <td>License metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="license_name" /></td>
    <td><code>string</code></td>
    <td>License name.</td>
</tr>
<tr>
    <td><CopyableCode code="product_name" /></td>
    <td><code>string</code></td>
    <td>Product name.</td>
</tr>
<tr>
    <td><CopyableCode code="product_sku" /></td>
    <td><code>string</code></td>
    <td>Product SKU.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>License status. (AVAILABLE, PENDING_AVAILABLE, DEACTIVATED, SUSPENDED, EXPIRED, PENDING_DELETE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="validity" /></td>
    <td><code>object</code></td>
    <td>Date and time range during which the license is valid, in ISO8601-UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>License version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_licenses">

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
    <td><CopyableCode code="licenses" /></td>
    <td><code>array</code></td>
    <td>License details.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results.</td>
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
    <td><a href="#get_license"><CopyableCode code="get_license" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets detailed information about the specified license.</td>
</tr>
<tr>
    <td><a href="#list_licenses"><CopyableCode code="list_licenses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the licenses for your account.</td>
</tr>
<tr>
    <td><a href="#create_license"><CopyableCode code="create_license" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LicenseName"><code>LicenseName</code></a>, <a href="#parameter-ProductName"><code>ProductName</code></a>, <a href="#parameter-ProductSKU"><code>ProductSKU</code></a>, <a href="#parameter-Issuer"><code>Issuer</code></a>, <a href="#parameter-HomeRegion"><code>HomeRegion</code></a>, <a href="#parameter-Validity"><code>Validity</code></a>, <a href="#parameter-Entitlements"><code>Entitlements</code></a>, <a href="#parameter-Beneficiary"><code>Beneficiary</code></a>, <a href="#parameter-ConsumptionConfiguration"><code>ConsumptionConfiguration</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a license.</td>
</tr>
<tr>
    <td><a href="#delete_license"><CopyableCode code="delete_license" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified license.</td>
</tr>
<tr>
    <td><a href="#checkout_borrow_license"><CopyableCode code="checkout_borrow_license" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LicenseArn"><code>LicenseArn</code></a>, <a href="#parameter-Entitlements"><code>Entitlements</code></a>, <a href="#parameter-DigitalSignatureMethod"><code>DigitalSignatureMethod</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Checks out the specified license for offline use.</td>
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
    defaultValue="get_license"
    values={[
        { label: 'get_license', value: 'get_license' },
        { label: 'list_licenses', value: 'list_licenses' }
    ]}
>
<TabItem value="get_license">

Gets detailed information about the specified license.

```sql
SELECT
beneficiary,
consumption_configuration,
create_time,
entitlements,
home_region,
issuer,
license_arn,
license_metadata,
license_name,
product_name,
product_sku,
status,
validity,
version
FROM aws.license_manager.licenses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_licenses">

Lists the licenses for your account.

```sql
SELECT
licenses,
next_token
FROM aws.license_manager.licenses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_license"
    values={[
        { label: 'create_license', value: 'create_license' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_license">

Creates a license.

```sql
INSERT INTO aws.license_manager.licenses (
LicenseName,
ProductName,
ProductSKU,
Issuer,
HomeRegion,
Validity,
Entitlements,
Beneficiary,
ConsumptionConfiguration,
LicenseMetadata,
ClientToken,
Tags,
region
)
SELECT 
'{{ LicenseName }}' /* required */,
'{{ ProductName }}' /* required */,
'{{ ProductSKU }}' /* required */,
'{{ Issuer }}' /* required */,
'{{ HomeRegion }}' /* required */,
'{{ Validity }}' /* required */,
'{{ Entitlements }}' /* required */,
'{{ Beneficiary }}' /* required */,
'{{ ConsumptionConfiguration }}' /* required */,
'{{ LicenseMetadata }}',
'{{ ClientToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
license_arn,
status,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: licenses
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the licenses resource.
    - name: LicenseName
      value: "{{ LicenseName }}"
      description: |
        License name.
    - name: ProductName
      value: "{{ ProductName }}"
      description: |
        Product name.
    - name: ProductSKU
      value: "{{ ProductSKU }}"
      description: |
        Product SKU.
    - name: Issuer
      description: |
        License issuer.
      value:
        Name: "{{ Name }}"
        SignKey: "{{ SignKey }}"
    - name: HomeRegion
      value: "{{ HomeRegion }}"
      description: |
        Home Region for the license.
    - name: Validity
      description: |
        Date and time range during which the license is valid, in ISO8601-UTC format.
      value:
        Begin: "{{ Begin }}"
        End: "{{ End }}"
    - name: Entitlements
      description: |
        License entitlements.
      value:
        - Name: "{{ Name }}"
          Value: "{{ Value }}"
          MaxCount: {{ MaxCount }}
          Overage: {{ Overage }}
          Unit: "{{ Unit }}"
          AllowCheckIn: {{ AllowCheckIn }}
    - name: Beneficiary
      value: "{{ Beneficiary }}"
      description: |
        License beneficiary.
    - name: ConsumptionConfiguration
      description: |
        Configuration for consumption of the license. Choose a provisional configuration for workloads running with continuous connectivity. Choose a borrow configuration for workloads with offline usage.
      value:
        RenewType: "{{ RenewType }}"
        ProvisionalConfiguration:
          MaxTimeToLiveInMinutes: {{ MaxTimeToLiveInMinutes }}
        BorrowConfiguration:
          AllowEarlyCheckIn: {{ AllowEarlyCheckIn }}
          MaxTimeToLiveInMinutes: {{ MaxTimeToLiveInMinutes }}
    - name: LicenseMetadata
      description: |
        Information about the license.
      value:
        - Name: "{{ Name }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    - name: Tags
      description: |
        Tags to add to the license. For more information about tagging support in License Manager, see the TagResource operation.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_license"
    values={[
        { label: 'delete_license', value: 'delete_license' }
    ]}
>
<TabItem value="delete_license">

Deletes the specified license.

```sql
DELETE FROM aws.license_manager.licenses
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="checkout_borrow_license"
    values={[
        { label: 'checkout_borrow_license', value: 'checkout_borrow_license' }
    ]}
>
<TabItem value="checkout_borrow_license">

Checks out the specified license for offline use.

```sql
EXEC aws.license_manager.licenses.checkout_borrow_license 
@region='{{ region }}' --required 
@@json=
'{
"LicenseArn": "{{ LicenseArn }}", 
"Entitlements": "{{ Entitlements }}", 
"DigitalSignatureMethod": "{{ DigitalSignatureMethod }}", 
"NodeId": "{{ NodeId }}", 
"CheckoutMetadata": "{{ CheckoutMetadata }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
