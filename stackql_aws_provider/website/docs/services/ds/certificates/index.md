--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
  - ds
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_certificate"
    values={[
        { label: 'describe_certificate', value: 'describe_certificate' },
        { label: 'list_certificates', value: 'list_certificates' }
    ]}
>
<TabItem value="describe_certificate">

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
    <td><CopyableCode code="certificate_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the certificate. (pattern: &lt;code&gt;^c-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="client_cert_auth_settings" /></td>
    <td><code>object</code></td>
    <td>A ClientCertAuthSettings object that contains client certificate authentication settings.</td>
</tr>
<tr>
    <td><CopyableCode code="common_name" /></td>
    <td><code>string</code></td>
    <td>The common name for the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="expiry_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the certificate will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="registered_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the certificate was registered.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the certificate. (Registering, Registered, RegisterFailed, Deregistering, Deregistered, DeregisterFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>Describes a state change for the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The function that the registered certificate performs. Valid values include ClientLDAPS or ClientCertAuth. The default value is ClientLDAPS. (ClientCertAuth, ClientLDAPS)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_certificates">

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
    <td><CopyableCode code="certificate_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the certificate. (pattern: &lt;code&gt;^c-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="common_name" /></td>
    <td><code>string</code></td>
    <td>The common name for the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="expiry_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the certificate will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the certificate. (Registering, Registered, RegisterFailed, Deregistering, Deregistered, DeregisterFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The function that the registered certificate performs. Valid values include ClientLDAPS or ClientCertAuth. The default value is ClientLDAPS. (ClientCertAuth, ClientLDAPS)</td>
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
    <td><a href="#describe_certificate"><CopyableCode code="describe_certificate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays information about the certificate registered for secure LDAP or client certificate authentication.</td>
</tr>
<tr>
    <td><a href="#list_certificates"><CopyableCode code="list_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.</td>
</tr>
<tr>
    <td><a href="#register_certificate"><CopyableCode code="register_certificate" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-CertificateData"><code>CertificateData</code></a></td>
    <td></td>
    <td>Registers a certificate for a secure LDAP or client certificate authentication.</td>
</tr>
<tr>
    <td><a href="#deregister_certificate"><CopyableCode code="deregister_certificate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.</td>
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
    defaultValue="describe_certificate"
    values={[
        { label: 'describe_certificate', value: 'describe_certificate' },
        { label: 'list_certificates', value: 'list_certificates' }
    ]}
>
<TabItem value="describe_certificate">

Displays information about the certificate registered for secure LDAP or client certificate authentication.

```sql
SELECT
certificate_id,
client_cert_auth_settings,
common_name,
expiry_date_time,
registered_date_time,
state,
state_reason,
type
FROM aws.ds.certificates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_certificates">

For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.

```sql
SELECT
certificate_id,
common_name,
expiry_date_time,
state,
type
FROM aws.ds.certificates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_certificate"
    values={[
        { label: 'register_certificate', value: 'register_certificate' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_certificate">

Registers a certificate for a secure LDAP or client certificate authentication.

```sql
INSERT INTO aws.ds.certificates (
DirectoryId,
CertificateData,
Type,
ClientCertAuthSettings,
region
)
SELECT 
'{{ DirectoryId }}' /* required */,
'{{ CertificateData }}' /* required */,
'{{ Type }}',
'{{ ClientCertAuthSettings }}',
'{{ region }}'
RETURNING
certificate_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: certificates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the certificates resource.
    - name: DirectoryId
      value: "{{ DirectoryId }}"
      description: |
        The identifier of the directory.
    - name: CertificateData
      value: "{{ CertificateData }}"
      description: |
        The certificate PEM string that needs to be registered.
    - name: Type
      value: "{{ Type }}"
      description: |
        The function that the registered certificate performs. Valid values include ClientLDAPS or ClientCertAuth. The default value is ClientLDAPS.
      valid_values: ['ClientCertAuth', 'ClientLDAPS']
    - name: ClientCertAuthSettings
      description: |
        A ClientCertAuthSettings object that contains client certificate authentication settings.
      value:
        OCSPUrl: "{{ OCSPUrl }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_certificate"
    values={[
        { label: 'deregister_certificate', value: 'deregister_certificate' }
    ]}
>
<TabItem value="deregister_certificate">

Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.

```sql
DELETE FROM aws.ds.certificates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
