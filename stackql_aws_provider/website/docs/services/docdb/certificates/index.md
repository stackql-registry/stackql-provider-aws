--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
  - docdb
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.docdb.certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_certificates"
    values={[
        { label: 'describe_certificates', value: 'describe_certificates' }
    ]}
>
<TabItem value="describe_certificates">

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
    <td><CopyableCode code="certificate_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the certificate. Example: arn:aws:rds:us-east-1::cert:rds-ca-2019</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique key that identifies a certificate. Example: rds-ca-2019</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_type" /></td>
    <td><code>string</code></td>
    <td>The type of the certificate. Example: CA</td>
</tr>
<tr>
    <td><CopyableCode code="thumbprint" /></td>
    <td><code>string</code></td>
    <td>The thumbprint of the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="valid_from" /></td>
    <td><code>string</code></td>
    <td>The starting date-time from which the certificate is valid. Example: 2019-07-31T17:57:09Z</td>
</tr>
<tr>
    <td><CopyableCode code="valid_till" /></td>
    <td><code>string</code></td>
    <td>The date-time after which the certificate is no longer valid. Example: 2024-07-31T17:57:09Z</td>
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
    <td><a href="#describe_certificates"><CopyableCode code="describe_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CertificateIdentifier"><code>CertificateIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.</td>
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
<tr id="parameter-CertificateIdentifier">
    <td><CopyableCode code="CertificateIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied certificate identifier. If this parameter is specified, information for only the specified certificate is returned. If this parameter is omitted, a list of up to MaxRecords certificates is returned. This parameter is not case sensitive. Constraints Must match an existing CertificateIdentifier.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter is not currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeCertificates request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum: 20 Maximum: 100</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_certificates"
    values={[
        { label: 'describe_certificates', value: 'describe_certificates' }
    ]}
>
<TabItem value="describe_certificates">

Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.

```sql
SELECT
certificate_arn,
certificate_identifier,
certificate_type,
thumbprint,
valid_from,
valid_till
FROM aws.docdb.certificates
WHERE region = '{{ region }}' -- required
AND CertificateIdentifier = '{{ CertificateIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
