--- 
title: certificate_signing_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_signing_requests
  - payment_cryptography
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

Creates, updates, deletes, gets or lists a <code>certificate_signing_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificate_signing_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography.certificate_signing_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_certificate_signing_request"
    values={[
        { label: 'get_certificate_signing_request', value: 'get_certificate_signing_request' }
    ]}
>
<TabItem value="get_certificate_signing_request">

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
    <td><CopyableCode code="certificate_signing_request" /></td>
    <td><code>string</code></td>
    <td>The certificate signing request generated using the key pair associated with the key identifier. (pattern: &lt;code&gt;&#91;^\&#91;;\&#93;&lt;&gt;&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_certificate_signing_request"><CopyableCode code="get_certificate_signing_request" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a certificate signing request (CSR) from a key pair.</td>
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
    defaultValue="get_certificate_signing_request"
    values={[
        { label: 'get_certificate_signing_request', value: 'get_certificate_signing_request' }
    ]}
>
<TabItem value="get_certificate_signing_request">

Creates a certificate signing request (CSR) from a key pair.

```sql
SELECT
certificate_signing_request
FROM aws.payment_cryptography.certificate_signing_requests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
