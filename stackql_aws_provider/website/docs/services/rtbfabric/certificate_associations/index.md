--- 
title: certificate_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_associations
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

Creates, updates, deletes, gets or lists a <code>certificate_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificate_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rtbfabric.certificate_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_certificate_association"
    values={[
        { label: 'get_certificate_association', value: 'get_certificate_association' },
        { label: 'list_certificate_associations', value: 'list_certificate_associations' }
    ]}
>
<TabItem value="get_certificate_association">

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
    <td><CopyableCode code="acmCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACM certificate. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:certificate/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the certificate was associated.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway. (pattern: &lt;code&gt;rtb-gw-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the certificate association. (PENDING_ASSOCIATION, ASSOCIATED, PENDING_DISASSOCIATION, DISASSOCIATED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the certificate association was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_certificate_associations">

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
    <td><CopyableCode code="acmCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACM certificate. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:certificate/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the certificate was associated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the certificate association. (PENDING_ASSOCIATION, ASSOCIATED, PENDING_DISASSOCIATION, DISASSOCIATED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the certificate association was last updated.</td>
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
    <td><a href="#get_certificate_association"><CopyableCode code="get_certificate_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-acmCertificateArn"><code>acmCertificateArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a certificate association with a responder gateway.</td>
</tr>
<tr>
    <td><a href="#list_certificate_associations"><CopyableCode code="list_certificate_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the certificate associations for a responder gateway.</td>
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
    <td>The Amazon Resource Name (ARN) of the ACM certificate.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_certificate_association"
    values={[
        { label: 'get_certificate_association', value: 'get_certificate_association' },
        { label: 'list_certificate_associations', value: 'list_certificate_associations' }
    ]}
>
<TabItem value="get_certificate_association">

Retrieves the details of a certificate association with a responder gateway.

```sql
SELECT
acmCertificateArn,
associatedAt,
gatewayId,
status,
updatedAt
FROM aws.rtbfabric.certificate_associations
WHERE gateway_id = '{{ gateway_id }}' -- required
AND acmCertificateArn = '{{ acmCertificateArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_certificate_associations">

Lists the certificate associations for a responder gateway.

```sql
SELECT
acmCertificateArn,
associatedAt,
status,
updatedAt
FROM aws.rtbfabric.certificate_associations
WHERE gateway_id = '{{ gateway_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
