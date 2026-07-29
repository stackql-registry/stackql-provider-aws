--- 
title: signing_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - signing_certificates
  - iam
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

Creates, updates, deletes, gets or lists a <code>signing_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signing_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.signing_certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_signing_certificates"
    values={[
        { label: 'list_signing_certificates', value: 'list_signing_certificates' }
    ]}
>
<TabItem value="list_signing_certificates">

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
    <td><CopyableCode code="certificate_body" /></td>
    <td><code>string</code></td>
    <td>The contents of the signing certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the signing certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the signing certificate. Active means that the key is valid for API calls, while Inactive means it is not.</td>
</tr>
<tr>
    <td><CopyableCode code="upload_date" /></td>
    <td><code>string</code></td>
    <td>The date when the signing certificate was uploaded.</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>The name of the user the signing certificate is associated with.</td>
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
    <td><a href="#list_signing_certificates"><CopyableCode code="list_signing_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list. Although each user is limited to a small number of signing certificates, you can still paginate the results using the MaxItems and Marker parameters. If the UserName field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request for this operation. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</td>
</tr>
<tr>
    <td><a href="#update_signing_certificate"><CopyableCode code="update_signing_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-CertificateId"><code>CertificateId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow. If the UserName field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</td>
</tr>
<tr>
    <td><a href="#delete_signing_certificate"><CopyableCode code="delete_signing_certificate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-CertificateId"><code>CertificateId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a></td>
    <td>Deletes a signing certificate associated with the specified IAM user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated IAM users.</td>
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
<tr id="parameter-CertificateId">
    <td><CopyableCode code="CertificateId" /></td>
    <td><code>string</code></td>
    <td>The ID of the signing certificate to delete. The format of this parameter, as described by its regex pattern, is a string of characters that can be upper- or lower-cased letters or digits.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true, and Marker contains a value to include in the subsequent call that tells the service where to continue from.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status you want to assign to the certificate. Active means that the certificate can be used for programmatic calls to Amazon Web Services Inactive means that the certificate cannot be used.</td>
</tr>
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the user the signing certificate belongs to. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_signing_certificates"
    values={[
        { label: 'list_signing_certificates', value: 'list_signing_certificates' }
    ]}
>
<TabItem value="list_signing_certificates">

Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list. Although each user is limited to a small number of signing certificates, you can still paginate the results using the MaxItems and Marker parameters. If the UserName field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request for this operation. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.

```sql
SELECT
certificate_body,
certificate_id,
status,
upload_date,
user_name
FROM aws.iam.signing_certificates
WHERE region = '{{ region }}' -- required
AND UserName = '{{ UserName }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_signing_certificate"
    values={[
        { label: 'update_signing_certificate', value: 'update_signing_certificate' }
    ]}
>
<TabItem value="update_signing_certificate">

Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow. If the UserName field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.

```sql
UPDATE aws.iam.signing_certificates
SET 
-- No updatable properties
WHERE 
CertificateId = '{{ CertificateId }}' --required
AND region = '{{ region }}' --required
AND UserName = '{{ UserName}}'
AND Status = '{{ Status}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_signing_certificate"
    values={[
        { label: 'delete_signing_certificate', value: 'delete_signing_certificate' }
    ]}
>
<TabItem value="delete_signing_certificate">

Deletes a signing certificate associated with the specified IAM user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated IAM users.

```sql
DELETE FROM aws.iam.signing_certificates
WHERE CertificateId = '{{ CertificateId }}' --required
AND region = '{{ region }}' --required
AND UserName = '{{ UserName }}'
;
```
</TabItem>
</Tabs>
