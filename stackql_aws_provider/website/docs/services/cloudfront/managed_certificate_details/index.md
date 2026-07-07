--- 
title: managed_certificate_details
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_certificate_details
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>managed_certificate_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_certificate_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.managed_certificate_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_certificate_details"
    values={[
        { label: 'get_managed_certificate_details', value: 'get_managed_certificate_details' }
    ]}
>
<TabItem value="get_managed_certificate_details">

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
    <td><CopyableCode code="CertificateArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the CloudFront managed ACM certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the CloudFront managed ACM certificate. Your distribution tenant will be updated with the latest certificate status. When calling the UpdateDistributionTenant operation, use the latest value for the ETag.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationTokenDetails" /></td>
    <td><code>string</code></td>
    <td>Contains details about the validation token of the specified CloudFront managed ACM certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationTokenHost" /></td>
    <td><code>string</code></td>
    <td>Contains details about the validation token host of the specified CloudFront managed ACM certificate. For cloudfront, CloudFront will automatically serve the validation token. Choose this mode if you can point the domain's DNS to CloudFront immediately. For self-hosted, you serve the validation token from your existing infrastructure. Choose this mode when you need to maintain current traffic flow while your certificate is being issued. You can place the validation token at the well-known path on your existing web server, wait for ACM to validate and issue the certificate, and then update your DNS to point to CloudFront. This setting only affects the initial certificate request. Once the DNS points to CloudFront, all future certificate renewals are automatically handled through CloudFront.</td>
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
    <td><a href="#get_managed_certificate_details"><CopyableCode code="get_managed_certificate_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about the CloudFront managed ACM certificate.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the distribution tenant. You can specify the ARN, ID, or name of the distribution tenant.</td>
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
    defaultValue="get_managed_certificate_details"
    values={[
        { label: 'get_managed_certificate_details', value: 'get_managed_certificate_details' }
    ]}
>
<TabItem value="get_managed_certificate_details">

Gets details about the CloudFront managed ACM certificate.

```sql
SELECT
CertificateArn,
CertificateStatus,
ValidationTokenDetails,
ValidationTokenHost
FROM aws.cloudfront.managed_certificate_details
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
