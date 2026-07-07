--- 
title: enclave_certificate_iam_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - enclave_certificate_iam_roles
  - ec2
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

Creates, updates, deletes, gets or lists an <code>enclave_certificate_iam_roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enclave_certificate_iam_roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.enclave_certificate_iam_roles" /></td></tr>
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
    <td><a href="#associate_enclave_certificate_iam_role"><CopyableCode code="associate_enclave_certificate_iam_role" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-CertificateArn"><code>CertificateArn</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Associates an Identity and Access Management (IAM) role with an Certificate Manager (ACM) certificate. This enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave. For more information, see Certificate Manager for Nitro Enclaves in the Amazon Web Services Nitro Enclaves User Guide. When the IAM role is associated with the ACM certificate, the certificate, certificate chain, and encrypted private key are placed in an Amazon S3 location that only the associated IAM role can access. The private key of the certificate is encrypted with an Amazon Web Services managed key that has an attached attestation-based key policy. To enable the IAM role to access the Amazon S3 object, you must grant it permission to call s3:GetObject on the Amazon S3 bucket returned by the command. To enable the IAM role to access the KMS key, you must grant it permission to call kms:Decrypt on the KMS key returned by the command. For more information, see Grant the role permission to access the certificate and encryption key in the Amazon Web Services Nitro Enclaves User Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_enclave_certificate_iam_role"><CopyableCode code="disassociate_enclave_certificate_iam_role" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CertificateArn"><code>CertificateArn</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disassociates an IAM role from an Certificate Manager (ACM) certificate. Disassociating an IAM role from an ACM certificate removes the Amazon S3 object that contains the certificate, certificate chain, and encrypted private key from the Amazon S3 bucket. It also revokes the IAM role's permission to use the KMS key used to encrypt the private key. This effectively revokes the role's permission to use the certificate.</td>
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
<tr id="parameter-CertificateArn">
    <td><CopyableCode code="CertificateArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the ACM certificate from which to disassociate the IAM role.</td>
</tr>
<tr id="parameter-RoleArn">
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role to disassociate.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="associate_enclave_certificate_iam_role"
    values={[
        { label: 'associate_enclave_certificate_iam_role', value: 'associate_enclave_certificate_iam_role' }
    ]}
>
<TabItem value="associate_enclave_certificate_iam_role">

Associates an Identity and Access Management (IAM) role with an Certificate Manager (ACM) certificate. This enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave. For more information, see Certificate Manager for Nitro Enclaves in the Amazon Web Services Nitro Enclaves User Guide. When the IAM role is associated with the ACM certificate, the certificate, certificate chain, and encrypted private key are placed in an Amazon S3 location that only the associated IAM role can access. The private key of the certificate is encrypted with an Amazon Web Services managed key that has an attached attestation-based key policy. To enable the IAM role to access the Amazon S3 object, you must grant it permission to call s3:GetObject on the Amazon S3 bucket returned by the command. To enable the IAM role to access the KMS key, you must grant it permission to call kms:Decrypt on the KMS key returned by the command. For more information, see Grant the role permission to access the certificate and encryption key in the Amazon Web Services Nitro Enclaves User Guide.

```sql
UPDATE aws.ec2.enclave_certificate_iam_roles
SET 
-- No updatable properties
WHERE 
CertificateArn = '{{ CertificateArn }}' --required
AND RoleArn = '{{ RoleArn }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
CertificateS3BucketName,
CertificateS3ObjectKey,
EncryptionKmsKeyId;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_enclave_certificate_iam_role"
    values={[
        { label: 'disassociate_enclave_certificate_iam_role', value: 'disassociate_enclave_certificate_iam_role' }
    ]}
>
<TabItem value="disassociate_enclave_certificate_iam_role">

Disassociates an IAM role from an Certificate Manager (ACM) certificate. Disassociating an IAM role from an ACM certificate removes the Amazon S3 object that contains the certificate, certificate chain, and encrypted private key from the Amazon S3 bucket. It also revokes the IAM role's permission to use the KMS key used to encrypt the private key. This effectively revokes the role's permission to use the certificate.

```sql
EXEC aws.ec2.enclave_certificate_iam_roles.disassociate_enclave_certificate_iam_role 
@CertificateArn='{{ CertificateArn }}' --required, 
@RoleArn='{{ RoleArn }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
