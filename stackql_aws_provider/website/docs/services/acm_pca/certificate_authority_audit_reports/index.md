--- 
title: certificate_authority_audit_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_authority_audit_reports
  - acm_pca
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

Creates, updates, deletes, gets or lists a <code>certificate_authority_audit_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificate_authority_audit_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.acm_pca.certificate_authority_audit_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_certificate_authority_audit_report"
    values={[
        { label: 'describe_certificate_authority_audit_report', value: 'describe_certificate_authority_audit_report' }
    ]}
>
<TabItem value="describe_certificate_authority_audit_report">

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
    <td><CopyableCode code="audit_report_status" /></td>
    <td><code>string</code></td>
    <td>Specifies whether report creation is in progress, has succeeded, or has failed. (CREATING, SUCCESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the report was created.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_bucket_name" /></td>
    <td><code>string</code></td>
    <td>Name of the S3 bucket that contains the report.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_key" /></td>
    <td><code>string</code></td>
    <td>S3 key that uniquely identifies the report file in your S3 bucket.</td>
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
    <td><a href="#describe_certificate_authority_audit_report"><CopyableCode code="describe_certificate_authority_audit_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about a specific audit report created by calling the CreateCertificateAuthorityAuditReport action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the IssueCertificate action or the RevokeCertificate action.</td>
</tr>
<tr>
    <td><a href="#create_certificate_authority_audit_report"><CopyableCode code="create_certificate_authority_audit_report" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateAuthorityArn"><code>CertificateAuthorityArn</code></a>, <a href="#parameter-S3BucketName"><code>S3BucketName</code></a>, <a href="#parameter-AuditReportResponseFormat"><code>AuditReportResponseFormat</code></a></td>
    <td></td>
    <td>Creates an audit report that lists every time that your CA private key is used to issue a certificate. The IssueCertificate and RevokeCertificate actions use the private key. To save the audit report to your designated Amazon S3 bucket, you must create a bucket policy that grants Amazon Web Services Private CA permission to access and write to it. For an example policy, see Prepare an Amazon S3 bucket for audit reports. Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see Encrypting Your Audit Reports. You can generate a maximum of one report every 30 minutes.</td>
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
    defaultValue="describe_certificate_authority_audit_report"
    values={[
        { label: 'describe_certificate_authority_audit_report', value: 'describe_certificate_authority_audit_report' }
    ]}
>
<TabItem value="describe_certificate_authority_audit_report">

Lists information about a specific audit report created by calling the CreateCertificateAuthorityAuditReport action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the IssueCertificate action or the RevokeCertificate action.

```sql
SELECT
audit_report_status,
created_at,
s3_bucket_name,
s3_key
FROM aws.acm_pca.certificate_authority_audit_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_certificate_authority_audit_report"
    values={[
        { label: 'create_certificate_authority_audit_report', value: 'create_certificate_authority_audit_report' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_certificate_authority_audit_report">

Creates an audit report that lists every time that your CA private key is used to issue a certificate. The IssueCertificate and RevokeCertificate actions use the private key. To save the audit report to your designated Amazon S3 bucket, you must create a bucket policy that grants Amazon Web Services Private CA permission to access and write to it. For an example policy, see Prepare an Amazon S3 bucket for audit reports. Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see Encrypting Your Audit Reports. You can generate a maximum of one report every 30 minutes.

```sql
INSERT INTO aws.acm_pca.certificate_authority_audit_reports (
CertificateAuthorityArn,
S3BucketName,
AuditReportResponseFormat,
region
)
SELECT 
'{{ CertificateAuthorityArn }}' /* required */,
'{{ S3BucketName }}' /* required */,
'{{ AuditReportResponseFormat }}' /* required */,
'{{ region }}'
RETURNING
audit_report_id,
s3_key
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: certificate_authority_audit_reports
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the certificate_authority_audit_reports resource.
    - name: CertificateAuthorityArn
      value: "{{ CertificateAuthorityArn }}"
      description: |
        The Amazon Resource Name (ARN) of the CA to be audited. This is of the form: arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 .
    - name: S3BucketName
      value: "{{ S3BucketName }}"
      description: |
        The name of the S3 bucket that will contain the audit report.
    - name: AuditReportResponseFormat
      value: "{{ AuditReportResponseFormat }}"
      description: |
        The format in which to create the report. This can be either JSON or CSV.
      valid_values: ['JSON', 'CSV']
`}</CodeBlock>

</TabItem>
</Tabs>
