--- 
title: associated_enclave_certificate_iam_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - associated_enclave_certificate_iam_roles
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

Creates, updates, deletes, gets or lists an <code>associated_enclave_certificate_iam_roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associated_enclave_certificate_iam_roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.associated_enclave_certificate_iam_roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_associated_enclave_certificate_iam_roles"
    values={[
        { label: 'get_associated_enclave_certificate_iam_roles', value: 'get_associated_enclave_certificate_iam_roles' }
    ]}
>
<TabItem value="get_associated_enclave_certificate_iam_roles">

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
    <td><CopyableCode code="AssociatedRoles" /></td>
    <td><code>string</code></td>
    <td>Information about the associated IAM roles.</td>
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
    <td><a href="#get_associated_enclave_certificate_iam_roles"><CopyableCode code="get_associated_enclave_certificate_iam_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-CertificateArn"><code>CertificateArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Returns the IAM roles that are associated with the specified ACM (ACM) certificate. It also returns the name of the Amazon S3 bucket and the Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored, and the ARN of the KMS key that's used to encrypt the private key.</td>
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
    <td>The ARN of the ACM certificate for which to view the associated IAM roles, encryption keys, and Amazon S3 object information.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_associated_enclave_certificate_iam_roles"
    values={[
        { label: 'get_associated_enclave_certificate_iam_roles', value: 'get_associated_enclave_certificate_iam_roles' }
    ]}
>
<TabItem value="get_associated_enclave_certificate_iam_roles">

Returns the IAM roles that are associated with the specified ACM (ACM) certificate. It also returns the name of the Amazon S3 bucket and the Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored, and the ARN of the KMS key that's used to encrypt the private key.

```sql
SELECT
AssociatedRoles
FROM aws.ec2.associated_enclave_certificate_iam_roles
WHERE CertificateArn = '{{ CertificateArn }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
