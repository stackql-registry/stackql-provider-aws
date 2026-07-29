--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
  - rds
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.certificates" /></td></tr>
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
    <td>The Amazon Resource Name (ARN) for the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique key that identifies a certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_type" /></td>
    <td><code>string</code></td>
    <td>The type of the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_override" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether there is an override for the default certificate identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_override_valid_till" /></td>
    <td><code>string</code></td>
    <td>If there is an override for the default certificate identifier, when the override expires.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbprint" /></td>
    <td><code>string</code></td>
    <td>The thumbprint of the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="valid_from" /></td>
    <td><code>string</code></td>
    <td>The starting date from which the certificate is valid.</td>
</tr>
<tr>
    <td><CopyableCode code="valid_till" /></td>
    <td><code>string</code></td>
    <td>The final date that the certificate continues to be valid.</td>
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
    <td>Lists the set of certificate authority (CA) certificates provided by Amazon RDS for this Amazon Web Services account. For more information, see Using SSL/TLS to encrypt a connection to a DB instance in the Amazon RDS User Guide and Using SSL/TLS to encrypt a connection to a DB cluster in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_certificates"><CopyableCode code="modify_certificates" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CertificateIdentifier"><code>CertificateIdentifier</code></a>, <a href="#parameter-RemoveCustomerOverride"><code>RemoveCustomerOverride</code></a></td>
    <td>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override. By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS. You might need to override the default certificate in the following situations: You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region. RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes. For more information about rotating your SSL/TLS certificate for RDS DB engines, see Rotating Your SSL/TLS Certificate in the Amazon RDS User Guide. For more information about rotating your SSL/TLS certificate for Aurora DB engines, see Rotating Your SSL/TLS Certificate in the Amazon Aurora User Guide.</td>
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
    <td>The new default certificate identifier to override the current one with. To determine the valid values, use the describe-certificates CLI command or the DescribeCertificates API operation.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter isn't currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeCertificates request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-RemoveCustomerOverride">
    <td><CopyableCode code="RemoveCustomerOverride" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to remove the override for the default certificate. If the override is removed, the default certificate is the system default.</td>
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

Lists the set of certificate authority (CA) certificates provided by Amazon RDS for this Amazon Web Services account. For more information, see Using SSL/TLS to encrypt a connection to a DB instance in the Amazon RDS User Guide and Using SSL/TLS to encrypt a connection to a DB cluster in the Amazon Aurora User Guide.

```sql
SELECT
certificate_arn,
certificate_identifier,
certificate_type,
customer_override,
customer_override_valid_till,
thumbprint,
valid_from,
valid_till
FROM aws.rds.certificates
WHERE region = '{{ region }}' -- required
AND CertificateIdentifier = '{{ CertificateIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_certificates"
    values={[
        { label: 'modify_certificates', value: 'modify_certificates' }
    ]}
>
<TabItem value="modify_certificates">

Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override. By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS. You might need to override the default certificate in the following situations: You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region. RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes. For more information about rotating your SSL/TLS certificate for RDS DB engines, see Rotating Your SSL/TLS Certificate in the Amazon RDS User Guide. For more information about rotating your SSL/TLS certificate for Aurora DB engines, see Rotating Your SSL/TLS Certificate in the Amazon Aurora User Guide.

```sql
UPDATE aws.rds.certificates
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND CertificateIdentifier = '{{ CertificateIdentifier}}'
AND RemoveCustomerOverride = {{ RemoveCustomerOverride}}
RETURNING
certificate_arn,
certificate_identifier,
certificate_type,
customer_override,
customer_override_valid_till,
thumbprint,
valid_from,
valid_till;
```
</TabItem>
</Tabs>
