--- 
title: email_identity_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - email_identity_certificates
  - sesv2
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

Creates, updates, deletes, gets or lists an <code>email_identity_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="email_identity_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.email_identity_certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_email_identity_certificates"
    values={[
        { label: 'list_email_identity_certificates', value: 'list_email_identity_certificates' }
    ]}
>
<TabItem value="list_email_identity_certificates">

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
    <td>The Amazon Resource Name (ARN) of the Certificate Manager (ACM) certificate that's associated with the email identity. (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:&#91;\w+=/,.@-&#93;+:&#91;\w+=/,.@-&#93;*:&#91;0-9&#93;+:certificate/&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_expiry_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp after which the certificate is no longer valid.</td>
</tr>
<tr>
    <td><CopyableCode code="from_address" /></td>
    <td><code>string</code></td>
    <td>The email address that the certificate applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the certificate association. A status of ACTIVE indicates that the certificate is ready to use for signing. (PROVISIONING, INACTIVE, DEPROVISIONING, ACTIVE, FAILED)</td>
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
    <td><a href="#list_email_identity_certificates"><CopyableCode code="list_email_identity_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the S/MIME certificates that are associated with the specified email identity. The results include certificates in all states, such as PROVISIONING, ACTIVE, INACTIVE, DEPROVISIONING, and FAILED. If a certificate has passed its expiration time, it's returned with a status of FAILED. We recommend using pagination to ensure that the operation returns quickly and successfully. When there are more results than fit in a single response, the response includes a NextToken value that you use in a subsequent call to retrieve the next set of results.</td>
</tr>
<tr>
    <td><a href="#associate_email_identity_certificate"><CopyableCode code="associate_email_identity_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EmailIdentity"><code>EmailIdentity</code></a>, <a href="#parameter-CertificateArn"><code>CertificateArn</code></a></td>
    <td></td>
    <td>Associates an S/MIME certificate with an email identity. After the certificate is active, Amazon SES API v2 can add an S/MIME signature to messages that you send from the associated address when signing is enabled on the configuration set used to send the message. The certificate is an X.509 certificate that you manage in Certificate Manager (ACM). You identify it by its Amazon Resource Name (ARN). If the email identity is a domain, you must specify a FromAddress that belongs to that domain or one of its subdomains. The certificate applies to messages sent from that address. If the email identity is an email address, FromAddress is optional. If you specify it, it must exactly match the email identity. When the association is created, the certificate begins provisioning and its status is PROVISIONING. The status changes to ACTIVE when the certificate is ready to use for signing. Each email address can have only one certificate association. If an association already exists for the address, this operation returns an error, unless the existing association is in the DEPROVISIONING state.</td>
</tr>
<tr>
    <td><a href="#disassociate_email_identity_certificate"><CopyableCode code="disassociate_email_identity_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EmailIdentity"><code>EmailIdentity</code></a></td>
    <td></td>
    <td>Removes the association between an S/MIME certificate and an email identity. After the association is removed, Amazon SES API v2 stops adding an S/MIME signature to messages sent from that address. If the email identity is a domain, specify the FromAddress whose certificate association you want to remove. This operation is idempotent. If the specified email identity exists but there's no matching certificate association, the operation succeeds without making any changes. Amazon SES API v2 returns a NotFoundException only when the specified email identity doesn't exist.</td>
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
    defaultValue="list_email_identity_certificates"
    values={[
        { label: 'list_email_identity_certificates', value: 'list_email_identity_certificates' }
    ]}
>
<TabItem value="list_email_identity_certificates">

Lists the S/MIME certificates that are associated with the specified email identity. The results include certificates in all states, such as PROVISIONING, ACTIVE, INACTIVE, DEPROVISIONING, and FAILED. If a certificate has passed its expiration time, it's returned with a status of FAILED. We recommend using pagination to ensure that the operation returns quickly and successfully. When there are more results than fit in a single response, the response includes a NextToken value that you use in a subsequent call to retrieve the next set of results.

```sql
SELECT
certificate_arn,
certificate_expiry_time,
from_address,
status
FROM aws.sesv2.email_identity_certificates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_email_identity_certificate"
    values={[
        { label: 'associate_email_identity_certificate', value: 'associate_email_identity_certificate' },
        { label: 'disassociate_email_identity_certificate', value: 'disassociate_email_identity_certificate' }
    ]}
>
<TabItem value="associate_email_identity_certificate">

Associates an S/MIME certificate with an email identity. After the certificate is active, Amazon SES API v2 can add an S/MIME signature to messages that you send from the associated address when signing is enabled on the configuration set used to send the message. The certificate is an X.509 certificate that you manage in Certificate Manager (ACM). You identify it by its Amazon Resource Name (ARN). If the email identity is a domain, you must specify a FromAddress that belongs to that domain or one of its subdomains. The certificate applies to messages sent from that address. If the email identity is an email address, FromAddress is optional. If you specify it, it must exactly match the email identity. When the association is created, the certificate begins provisioning and its status is PROVISIONING. The status changes to ACTIVE when the certificate is ready to use for signing. Each email address can have only one certificate association. If an association already exists for the address, this operation returns an error, unless the existing association is in the DEPROVISIONING state.

```sql
UPDATE aws.sesv2.email_identity_certificates
SET 
EmailIdentity = '{{ EmailIdentity }}',
FromAddress = '{{ FromAddress }}',
CertificateArn = '{{ CertificateArn }}'
WHERE 
region = '{{ region }}' --required
AND EmailIdentity = '{{ EmailIdentity }}' --required
AND CertificateArn = '{{ CertificateArn }}' --required;
```
</TabItem>
<TabItem value="disassociate_email_identity_certificate">

Removes the association between an S/MIME certificate and an email identity. After the association is removed, Amazon SES API v2 stops adding an S/MIME signature to messages sent from that address. If the email identity is a domain, specify the FromAddress whose certificate association you want to remove. This operation is idempotent. If the specified email identity exists but there's no matching certificate association, the operation succeeds without making any changes. Amazon SES API v2 returns a NotFoundException only when the specified email identity doesn't exist.

```sql
UPDATE aws.sesv2.email_identity_certificates
SET 
EmailIdentity = '{{ EmailIdentity }}',
FromAddress = '{{ FromAddress }}'
WHERE 
region = '{{ region }}' --required
AND EmailIdentity = '{{ EmailIdentity }}' --required;
```
</TabItem>
</Tabs>
