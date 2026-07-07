--- 
title: trust_store_ca_certificates_bundles
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_store_ca_certificates_bundles
  - elbv2
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

Creates, updates, deletes, gets or lists a <code>trust_store_ca_certificates_bundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trust_store_ca_certificates_bundles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.trust_store_ca_certificates_bundles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_trust_store_ca_certificates_bundle"
    values={[
        { label: 'get_trust_store_ca_certificates_bundle', value: 'get_trust_store_ca_certificates_bundle' }
    ]}
>
<TabItem value="get_trust_store_ca_certificates_bundle">

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
    <td><CopyableCode code="line_items" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#get_trust_store_ca_certificates_bundle"><CopyableCode code="get_trust_store_ca_certificates_bundle" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TrustStoreArn"><code>TrustStoreArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the ca certificate bundle. This action returns a pre-signed S3 URI which is active for ten minutes.</td>
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
<tr id="parameter-TrustStoreArn">
    <td><CopyableCode code="TrustStoreArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trust store.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_trust_store_ca_certificates_bundle"
    values={[
        { label: 'get_trust_store_ca_certificates_bundle', value: 'get_trust_store_ca_certificates_bundle' }
    ]}
>
<TabItem value="get_trust_store_ca_certificates_bundle">

Retrieves the ca certificate bundle. This action returns a pre-signed S3 URI which is active for ten minutes.

```sql
SELECT
line_items
FROM aws.elbv2.trust_store_ca_certificates_bundles
WHERE TrustStoreArn = '{{ TrustStoreArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
