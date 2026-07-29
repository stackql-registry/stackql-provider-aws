--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
  - rtbfabric
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

Creates, updates, deletes, gets or lists a <code>certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rtbfabric.certificates" /></td></tr>
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
    <td><a href="#associate_certificate"><CopyableCode code="associate_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-acmCertificateArn"><code>acmCertificateArn</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Associates an ACM certificate with a responder gateway.</td>
</tr>
<tr>
    <td><a href="#disassociate_certificate"><CopyableCode code="disassociate_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-acmCertificateArn"><code>acmCertificateArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a certificate association from a responder gateway.</td>
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
<tr id="parameter-acmCertificateArn">
    <td><CopyableCode code="acmCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACM certificate to disassociate.</td>
</tr>
<tr id="parameter-gateway_id">
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="associate_certificate"
    values={[
        { label: 'associate_certificate', value: 'associate_certificate' },
        { label: 'disassociate_certificate', value: 'disassociate_certificate' }
    ]}
>
<TabItem value="associate_certificate">

Associates an ACM certificate with a responder gateway.

```sql
UPDATE aws.rtbfabric.certificates
SET 
acmCertificateArn = '{{ acmCertificateArn }}',
clientToken = '{{ clientToken }}'
WHERE 
gateway_id = '{{ gateway_id }}' --required
AND region = '{{ region }}' --required
AND acmCertificateArn = '{{ acmCertificateArn }}' --required
AND clientToken = '{{ clientToken }}' --required
RETURNING
acm_certificate_arn,
gateway_id,
status;
```
</TabItem>
<TabItem value="disassociate_certificate">

Removes a certificate association from a responder gateway.

```sql
UPDATE aws.rtbfabric.certificates
SET 
-- No updatable properties
WHERE 
gateway_id = '{{ gateway_id }}' --required
AND acmCertificateArn = '{{ acmCertificateArn }}' --required
AND region = '{{ region }}' --required
RETURNING
acm_certificate_arn,
gateway_id,
status;
```
</TabItem>
</Tabs>
