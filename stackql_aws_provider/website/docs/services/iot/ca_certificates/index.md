--- 
title: ca_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - ca_certificates
  - iot
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

Creates, updates, deletes, gets or lists a <code>ca_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ca_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.ca_certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ca_certificate"
    values={[
        { label: 'describe_ca_certificate', value: 'describe_ca_certificate' },
        { label: 'list_ca_certificates', value: 'list_ca_certificates' }
    ]}
>
<TabItem value="describe_ca_certificate">

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
    <td><CopyableCode code="certificate_description" /></td>
    <td><code>object</code></td>
    <td>The CA certificate description.</td>
</tr>
<tr>
    <td><CopyableCode code="registration_config" /></td>
    <td><code>object</code></td>
    <td>Information about the registration configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ca_certificates">

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
    <td>The ARN of the CA certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the CA certificate. (pattern: &lt;code&gt;(0x)?&#91;a-fA-F0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the CA certificate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the CA certificate. The status value REGISTER_INACTIVE is deprecated and should not be used. (ACTIVE, INACTIVE)</td>
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
    <td><a href="#describe_ca_certificate"><CopyableCode code="describe_ca_certificate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ca_certificate_id"><code>ca_certificate_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a registered CA certificate. Requires permission to access the DescribeCACertificate action.</td>
</tr>
<tr>
    <td><a href="#list_ca_certificates"><CopyableCode code="list_ca_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-isAscendingOrder"><code>isAscendingOrder</code></a>, <a href="#parameter-templateName"><code>templateName</code></a></td>
    <td>Lists the CA certificates registered for your Amazon Web Services account. The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results. Requires permission to access the ListCACertificates action.</td>
</tr>
<tr>
    <td><a href="#register_ca_certificate"><CopyableCode code="register_ca_certificate" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-caCertificate"><code>caCertificate</code></a></td>
    <td><a href="#parameter-setAsActive"><code>setAsActive</code></a>, <a href="#parameter-allowAutoRegistration"><code>allowAutoRegistration</code></a></td>
    <td>Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA certificates you can register in your Amazon Web Services account. You can register up to 10 CA certificates with the same CA subject field per Amazon Web Services account. Requires permission to access the RegisterCACertificate action.</td>
</tr>
<tr>
    <td><a href="#update_ca_certificate"><CopyableCode code="update_ca_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ca_certificate_id"><code>ca_certificate_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-newStatus"><code>newStatus</code></a>, <a href="#parameter-newAutoRegistrationStatus"><code>newAutoRegistrationStatus</code></a></td>
    <td>Updates a registered CA certificate. Requires permission to access the UpdateCACertificate action.</td>
</tr>
<tr>
    <td><a href="#delete_ca_certificate"><CopyableCode code="delete_ca_certificate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ca_certificate_id"><code>ca_certificate_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a registered CA certificate. Requires permission to access the DeleteCACertificate action.</td>
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
<tr id="parameter-ca_certificate_id">
    <td><CopyableCode code="ca_certificate_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the certificate to delete. (The last part of the certificate ARN contains the certificate ID.)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-allowAutoRegistration">
    <td><CopyableCode code="allowAutoRegistration" /></td>
    <td><code>boolean</code></td>
    <td>Allows this CA certificate to be used for auto registration of device certificates.</td>
</tr>
<tr id="parameter-isAscendingOrder">
    <td><CopyableCode code="isAscendingOrder" /></td>
    <td><code>boolean</code></td>
    <td>Determines the order of the results.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results.</td>
</tr>
<tr id="parameter-newAutoRegistrationStatus">
    <td><CopyableCode code="newAutoRegistrationStatus" /></td>
    <td><code>string</code></td>
    <td>The new value for the auto registration status. Valid values are: "ENABLE" or "DISABLE".</td>
</tr>
<tr id="parameter-newStatus">
    <td><CopyableCode code="newStatus" /></td>
    <td><code>string</code></td>
    <td>The updated status of the CA certificate. Note: The status value REGISTER_INACTIVE is deprecated and should not be used.</td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The result page size.</td>
</tr>
<tr id="parameter-setAsActive">
    <td><CopyableCode code="setAsActive" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value that specifies if the CA certificate is set to active. Valid values: ACTIVE | INACTIVE</td>
</tr>
<tr id="parameter-templateName">
    <td><CopyableCode code="templateName" /></td>
    <td><code>string</code></td>
    <td>The name of the provisioning template.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ca_certificate"
    values={[
        { label: 'describe_ca_certificate', value: 'describe_ca_certificate' },
        { label: 'list_ca_certificates', value: 'list_ca_certificates' }
    ]}
>
<TabItem value="describe_ca_certificate">

Describes a registered CA certificate. Requires permission to access the DescribeCACertificate action.

```sql
SELECT
certificate_description,
registration_config
FROM aws.iot.ca_certificates
WHERE ca_certificate_id = '{{ ca_certificate_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ca_certificates">

Lists the CA certificates registered for your Amazon Web Services account. The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results. Requires permission to access the ListCACertificates action.

```sql
SELECT
certificate_arn,
certificate_id,
creation_date,
status
FROM aws.iot.ca_certificates
WHERE region = '{{ region }}' -- required
AND pageSize = '{{ pageSize }}'
AND marker = '{{ marker }}'
AND isAscendingOrder = '{{ isAscendingOrder }}'
AND templateName = '{{ templateName }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_ca_certificate"
    values={[
        { label: 'register_ca_certificate', value: 'register_ca_certificate' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_ca_certificate">

Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA certificates you can register in your Amazon Web Services account. You can register up to 10 CA certificates with the same CA subject field per Amazon Web Services account. Requires permission to access the RegisterCACertificate action.

```sql
INSERT INTO aws.iot.ca_certificates (
caCertificate,
verificationCertificate,
registrationConfig,
tags,
certificateMode,
region,
setAsActive,
allowAutoRegistration
)
SELECT 
'{{ caCertificate }}' /* required */,
'{{ verificationCertificate }}',
'{{ registrationConfig }}',
'{{ tags }}',
'{{ certificateMode }}',
'{{ region }}',
'{{ setAsActive }}',
'{{ allowAutoRegistration }}'
RETURNING
certificate_arn,
certificate_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ca_certificates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ca_certificates resource.
    - name: caCertificate
      value: "{{ caCertificate }}"
      description: |
        The PEM of a certificate.
    - name: verificationCertificate
      value: "{{ verificationCertificate }}"
      description: |
        The PEM of a certificate.
    - name: registrationConfig
      description: |
        The registration configuration.
      value:
        templateBody: "{{ templateBody }}"
        roleArn: "{{ roleArn }}"
        templateName: "{{ templateName }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: certificateMode
      value: "{{ certificateMode }}"
      valid_values: ['DEFAULT', 'SNI_ONLY']
    - name: setAsActive
      value: {{ setAsActive }}
      description: A boolean value that specifies if the CA certificate is set to active. Valid values: ACTIVE | INACTIVE
      description: A boolean value that specifies if the CA certificate is set to active. Valid values: ACTIVE | INACTIVE
    - name: allowAutoRegistration
      value: {{ allowAutoRegistration }}
      description: Allows this CA certificate to be used for auto registration of device certificates.
      description: Allows this CA certificate to be used for auto registration of device certificates.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ca_certificate"
    values={[
        { label: 'update_ca_certificate', value: 'update_ca_certificate' }
    ]}
>
<TabItem value="update_ca_certificate">

Updates a registered CA certificate. Requires permission to access the UpdateCACertificate action.

```sql
UPDATE aws.iot.ca_certificates
SET 
registrationConfig = '{{ registrationConfig }}',
removeAutoRegistration = {{ removeAutoRegistration }}
WHERE 
ca_certificate_id = '{{ ca_certificate_id }}' --required
AND region = '{{ region }}' --required
AND newStatus = '{{ newStatus}}'
AND newAutoRegistrationStatus = '{{ newAutoRegistrationStatus}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ca_certificate"
    values={[
        { label: 'delete_ca_certificate', value: 'delete_ca_certificate' }
    ]}
>
<TabItem value="delete_ca_certificate">

Deletes a registered CA certificate. Requires permission to access the DeleteCACertificate action.

```sql
DELETE FROM aws.iot.ca_certificates
WHERE ca_certificate_id = '{{ ca_certificate_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
