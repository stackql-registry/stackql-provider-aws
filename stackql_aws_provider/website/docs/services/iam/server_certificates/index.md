--- 
title: server_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - server_certificates
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

Creates, updates, deletes, gets or lists a <code>server_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="server_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.server_certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_server_certificate"
    values={[
        { label: 'get_server_certificate', value: 'get_server_certificate' },
        { label: 'list_server_certificates', value: 'list_server_certificates' }
    ]}
>
<TabItem value="get_server_certificate">

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
    <td>The contents of the public key certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_chain" /></td>
    <td><code>string</code></td>
    <td>The contents of the public key certificate chain.</td>
</tr>
<tr>
    <td><CopyableCode code="server_certificate_metadata" /></td>
    <td><code>string</code></td>
    <td>The meta information of the server certificate, such as its name, path, ID, and ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are attached to the server certificate. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_server_certificates">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) specifying the server certificate. For more information about ARNs and how to use them in policies, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>string</code></td>
    <td>The date on which the certificate is set to expire.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The path to the server certificate. For more information about paths, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="server_certificate_id" /></td>
    <td><code>string</code></td>
    <td>The stable and unique string identifying the server certificate. For more information about IDs, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="server_certificate_name" /></td>
    <td><code>string</code></td>
    <td>The name that identifies the server certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="upload_date" /></td>
    <td><code>string</code></td>
    <td>The date when the server certificate was uploaded.</td>
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
    <td><a href="#get_server_certificate"><CopyableCode code="get_server_certificate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ServerCertificateName"><code>ServerCertificateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified server certificate stored in IAM. For more information about working with server certificates, see Working with server certificates in the IAM User Guide. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</td>
</tr>
<tr>
    <td><a href="#list_server_certificates"><CopyableCode code="list_server_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PathPrefix"><code>PathPrefix</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list. You can paginate the results using the MaxItems and Marker parameters. For more information about working with server certificates, see Working with server certificates in the IAM User Guide. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see GetServerCertificate.</td>
</tr>
<tr>
    <td><a href="#update_server_certificate"><CopyableCode code="update_server_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ServerCertificateName"><code>ServerCertificateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewPath"><code>NewPath</code></a>, <a href="#parameter-NewServerCertificateName"><code>NewServerCertificateName</code></a></td>
    <td>Updates the name and/or the path of the specified server certificate stored in IAM. For more information about working with server certificates, see Working with server certificates in the IAM User Guide. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM. You should understand the implications of changing a server certificate's path or name. For more information, see Renaming a server certificate in the IAM User Guide. The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named ProductionCert to ProdCert, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the ProductionCert group, but not the ProdCert certificate, then the update fails. For more information about permissions, see Access management in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_server_certificate"><CopyableCode code="delete_server_certificate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ServerCertificateName"><code>ServerCertificateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified server certificate. For more information about working with server certificates, see Working with server certificates in the IAM User Guide. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM. If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, see DeleteLoadBalancerListeners in the Elastic Load Balancing API Reference.</td>
</tr>
<tr>
    <td><a href="#upload_server_certificate"><CopyableCode code="upload_server_certificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ServerCertificateName"><code>ServerCertificateName</code></a>, <a href="#parameter-CertificateBody"><code>CertificateBody</code></a>, <a href="#parameter-PrivateKey"><code>PrivateKey</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Path"><code>Path</code></a>, <a href="#parameter-CertificateChain"><code>CertificateChain</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Uploads a server certificate entity for the Amazon Web Services account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded. We recommend that you use Certificate Manager to provision, manage, and deploy your server certificates. With ACM you can request a certificate, deploy it to Amazon Web Services resources, and let ACM handle certificate renewals for you. Certificates provided by ACM are free. For more information about using ACM, see the Certificate Manager User Guide. For more information about working with server certificates, see Working with server certificates in the IAM User Guide. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM. For information about the number of server certificates you can upload, see IAM and STS quotas in the IAM User Guide. Because the body of the public key certificate, private key, and the certificate chain can be large, you should use POST rather than GET when calling UploadServerCertificate. For information about setting up signatures and authorization through the API, see Signing Amazon Web Services API requests in the Amazon Web Services General Reference. For general information about using the Query API with IAM, see Calling the API by making HTTP query requests in the IAM User Guide.</td>
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
<tr id="parameter-CertificateBody">
    <td><CopyableCode code="CertificateBody" /></td>
    <td><code>string</code></td>
    <td>The contents of the public key certificate in PEM-encoded format. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
</tr>
<tr id="parameter-PrivateKey">
    <td><CopyableCode code="PrivateKey" /></td>
    <td><code>string</code></td>
    <td>The contents of the private key in PEM-encoded format. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
</tr>
<tr id="parameter-ServerCertificateName">
    <td><CopyableCode code="ServerCertificateName" /></td>
    <td><code>string</code></td>
    <td>The name for the server certificate. Do not include the path in this value. The name of the certificate cannot contain any spaces. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CertificateChain">
    <td><CopyableCode code="CertificateChain" /></td>
    <td><code>string</code></td>
    <td>The contents of the certificate chain. This is typically a concatenation of the PEM-encoded public key certificates of the chain. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
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
<tr id="parameter-NewPath">
    <td><CopyableCode code="NewPath" /></td>
    <td><code>string</code></td>
    <td>The new path for the server certificate. Include this only if you are updating the server certificate's path. This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-NewServerCertificateName">
    <td><CopyableCode code="NewServerCertificateName" /></td>
    <td><code>string</code></td>
    <td>The new name for the server certificate. Include this only if you are updating the server certificate's name. The name of the certificate cannot contain any spaces. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-Path">
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path for the server certificate. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters. If you are uploading a server certificate specifically for use with Amazon CloudFront distributions, you must specify a path using the path parameter. The path must begin with /cloudfront and must include a trailing slash (for example, /cloudfront/test/).</td>
</tr>
<tr id="parameter-PathPrefix">
    <td><CopyableCode code="PathPrefix" /></td>
    <td><code>string</code></td>
    <td>The path prefix for filtering the results. For example: /company/servercerts would get all server certificates for which the path starts with /company/servercerts. This parameter is optional. If it is not included, it defaults to a slash (/), listing all server certificates. This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags that you want to attach to the new IAM server certificate resource. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_server_certificate"
    values={[
        { label: 'get_server_certificate', value: 'get_server_certificate' },
        { label: 'list_server_certificates', value: 'list_server_certificates' }
    ]}
>
<TabItem value="get_server_certificate">

Retrieves information about the specified server certificate stored in IAM. For more information about working with server certificates, see Working with server certificates in the IAM User Guide. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.

```sql
SELECT
certificate_body,
certificate_chain,
server_certificate_metadata,
tags
FROM aws.iam.server_certificates
WHERE ServerCertificateName = '{{ ServerCertificateName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_server_certificates">

Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list. You can paginate the results using the MaxItems and Marker parameters. For more information about working with server certificates, see Working with server certificates in the IAM User Guide. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see GetServerCertificate.

```sql
SELECT
arn,
expiration,
path,
server_certificate_id,
server_certificate_name,
upload_date
FROM aws.iam.server_certificates
WHERE region = '{{ region }}' -- required
AND PathPrefix = '{{ PathPrefix }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_server_certificate"
    values={[
        { label: 'update_server_certificate', value: 'update_server_certificate' }
    ]}
>
<TabItem value="update_server_certificate">

Updates the name and/or the path of the specified server certificate stored in IAM. For more information about working with server certificates, see Working with server certificates in the IAM User Guide. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM. You should understand the implications of changing a server certificate's path or name. For more information, see Renaming a server certificate in the IAM User Guide. The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named ProductionCert to ProdCert, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the ProductionCert group, but not the ProdCert certificate, then the update fails. For more information about permissions, see Access management in the IAM User Guide.

```sql
UPDATE aws.iam.server_certificates
SET 
-- No updatable properties
WHERE 
ServerCertificateName = '{{ ServerCertificateName }}' --required
AND region = '{{ region }}' --required
AND NewPath = '{{ NewPath}}'
AND NewServerCertificateName = '{{ NewServerCertificateName}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_server_certificate"
    values={[
        { label: 'delete_server_certificate', value: 'delete_server_certificate' }
    ]}
>
<TabItem value="delete_server_certificate">

Deletes the specified server certificate. For more information about working with server certificates, see Working with server certificates in the IAM User Guide. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM. If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, see DeleteLoadBalancerListeners in the Elastic Load Balancing API Reference.

```sql
DELETE FROM aws.iam.server_certificates
WHERE ServerCertificateName = '{{ ServerCertificateName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="upload_server_certificate"
    values={[
        { label: 'upload_server_certificate', value: 'upload_server_certificate' }
    ]}
>
<TabItem value="upload_server_certificate">

Uploads a server certificate entity for the Amazon Web Services account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded. We recommend that you use Certificate Manager to provision, manage, and deploy your server certificates. With ACM you can request a certificate, deploy it to Amazon Web Services resources, and let ACM handle certificate renewals for you. Certificates provided by ACM are free. For more information about using ACM, see the Certificate Manager User Guide. For more information about working with server certificates, see Working with server certificates in the IAM User Guide. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM. For information about the number of server certificates you can upload, see IAM and STS quotas in the IAM User Guide. Because the body of the public key certificate, private key, and the certificate chain can be large, you should use POST rather than GET when calling UploadServerCertificate. For information about setting up signatures and authorization through the API, see Signing Amazon Web Services API requests in the Amazon Web Services General Reference. For general information about using the Query API with IAM, see Calling the API by making HTTP query requests in the IAM User Guide.

```sql
EXEC aws.iam.server_certificates.upload_server_certificate 
@ServerCertificateName='{{ ServerCertificateName }}' --required, 
@CertificateBody='{{ CertificateBody }}' --required, 
@PrivateKey='{{ PrivateKey }}' --required, 
@region='{{ region }}' --required, 
@Path='{{ Path }}', 
@CertificateChain='{{ CertificateChain }}', 
@Tags='{{ Tags }}'
;
```
</TabItem>
</Tabs>
