--- 
title: audit_suppressions
hide_title: false
hide_table_of_contents: false
keywords:
  - audit_suppressions
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

Creates, updates, deletes, gets or lists an <code>audit_suppressions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="audit_suppressions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.audit_suppressions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_audit_suppression"
    values={[
        { label: 'describe_audit_suppression', value: 'describe_audit_suppression' },
        { label: 'list_audit_suppressions', value: 'list_audit_suppressions' }
    ]}
>
<TabItem value="describe_audit_suppression">

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
    <td><CopyableCode code="checkName" /></td>
    <td><code>string</code></td>
    <td>An audit check name. Checks must be enabled for your account. (Use DescribeAccountAuditConfiguration to see the list of all checks, including those that are enabled or use UpdateAccountAuditConfiguration to select which checks are enabled.)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the audit suppression. (pattern: &lt;code&gt;&#91;\p&#123;Graph&#125;\x20&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expirationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The epoch timestamp in seconds at which this suppression expires.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceIdentifier" /></td>
    <td><code>object</code></td>
    <td>Information that identifies the noncompliant resource.</td>
</tr>
<tr>
    <td><CopyableCode code="suppressIndefinitely" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a suppression should exist indefinitely or not.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_audit_suppressions">

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
    <td><CopyableCode code="checkName" /></td>
    <td><code>string</code></td>
    <td>An audit check name. Checks must be enabled for your account. (Use DescribeAccountAuditConfiguration to see the list of all checks, including those that are enabled or use UpdateAccountAuditConfiguration to select which checks are enabled.)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the audit suppression. (pattern: &lt;code&gt;&#91;\p&#123;Graph&#125;\x20&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expirationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration date (epoch timestamp in seconds) that you want the suppression to adhere to.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceIdentifier" /></td>
    <td><code>object</code></td>
    <td>Information that identifies the noncompliant resource.</td>
</tr>
<tr>
    <td><CopyableCode code="suppressIndefinitely" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a suppression should exist indefinitely or not.</td>
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
    <td><a href="#describe_audit_suppression"><CopyableCode code="describe_audit_suppression" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a Device Defender audit suppression.</td>
</tr>
<tr>
    <td><a href="#list_audit_suppressions"><CopyableCode code="list_audit_suppressions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists your Device Defender audit listings. Requires permission to access the ListAuditSuppressions action.</td>
</tr>
<tr>
    <td><a href="#create_audit_suppression"><CopyableCode code="create_audit_suppression" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-checkName"><code>checkName</code></a>, <a href="#parameter-resourceIdentifier"><code>resourceIdentifier</code></a>, <a href="#parameter-clientRequestToken"><code>clientRequestToken</code></a></td>
    <td></td>
    <td>Creates a Device Defender audit suppression. Requires permission to access the CreateAuditSuppression action.</td>
</tr>
<tr>
    <td><a href="#update_audit_suppression"><CopyableCode code="update_audit_suppression" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-checkName"><code>checkName</code></a>, <a href="#parameter-resourceIdentifier"><code>resourceIdentifier</code></a></td>
    <td></td>
    <td>Updates a Device Defender audit suppression.</td>
</tr>
<tr>
    <td><a href="#delete_audit_suppression"><CopyableCode code="delete_audit_suppression" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Device Defender audit suppression. Requires permission to access the DeleteAuditSuppression action.</td>
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
    defaultValue="describe_audit_suppression"
    values={[
        { label: 'describe_audit_suppression', value: 'describe_audit_suppression' },
        { label: 'list_audit_suppressions', value: 'list_audit_suppressions' }
    ]}
>
<TabItem value="describe_audit_suppression">

Gets information about a Device Defender audit suppression.

```sql
SELECT
checkName,
description,
expirationDate,
resourceIdentifier,
suppressIndefinitely
FROM aws.iot.audit_suppressions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_audit_suppressions">

Lists your Device Defender audit listings. Requires permission to access the ListAuditSuppressions action.

```sql
SELECT
checkName,
description,
expirationDate,
resourceIdentifier,
suppressIndefinitely
FROM aws.iot.audit_suppressions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_audit_suppression"
    values={[
        { label: 'create_audit_suppression', value: 'create_audit_suppression' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_audit_suppression">

Creates a Device Defender audit suppression. Requires permission to access the CreateAuditSuppression action.

```sql
INSERT INTO aws.iot.audit_suppressions (
checkName,
resourceIdentifier,
expirationDate,
suppressIndefinitely,
description,
clientRequestToken,
region
)
SELECT 
'{{ checkName }}' /* required */,
'{{ resourceIdentifier }}' /* required */,
'{{ expirationDate }}',
{{ suppressIndefinitely }},
'{{ description }}',
'{{ clientRequestToken }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: audit_suppressions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the audit_suppressions resource.
    - name: checkName
      value: "{{ checkName }}"
      description: |
        An audit check name. Checks must be enabled for your account. (Use DescribeAccountAuditConfiguration to see the list of all checks, including those that are enabled or use UpdateAccountAuditConfiguration to select which checks are enabled.)
    - name: resourceIdentifier
      description: |
        Information that identifies the noncompliant resource.
      value:
        deviceCertificateId: "{{ deviceCertificateId }}"
        caCertificateId: "{{ caCertificateId }}"
        cognitoIdentityPoolId: "{{ cognitoIdentityPoolId }}"
        clientId: "{{ clientId }}"
        policyVersionIdentifier:
          policyName: "{{ policyName }}"
          policyVersionId: "{{ policyVersionId }}"
        account: "{{ account }}"
        iamRoleArn: "{{ iamRoleArn }}"
        roleAliasArn: "{{ roleAliasArn }}"
        issuerCertificateIdentifier:
          issuerCertificateSubject: "{{ issuerCertificateSubject }}"
          issuerId: "{{ issuerId }}"
          issuerCertificateSerialNumber: "{{ issuerCertificateSerialNumber }}"
        deviceCertificateArn: "{{ deviceCertificateArn }}"
    - name: expirationDate
      value: "{{ expirationDate }}"
    - name: suppressIndefinitely
      value: {{ suppressIndefinitely }}
    - name: description
      value: "{{ description }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_audit_suppression"
    values={[
        { label: 'update_audit_suppression', value: 'update_audit_suppression' }
    ]}
>
<TabItem value="update_audit_suppression">

Updates a Device Defender audit suppression.

```sql
UPDATE aws.iot.audit_suppressions
SET 
checkName = '{{ checkName }}',
resourceIdentifier = '{{ resourceIdentifier }}',
expirationDate = '{{ expirationDate }}',
suppressIndefinitely = {{ suppressIndefinitely }},
description = '{{ description }}'
WHERE 
region = '{{ region }}' --required
AND checkName = '{{ checkName }}' --required
AND resourceIdentifier = '{{ resourceIdentifier }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_audit_suppression"
    values={[
        { label: 'delete_audit_suppression', value: 'delete_audit_suppression' }
    ]}
>
<TabItem value="delete_audit_suppression">

Deletes a Device Defender audit suppression. Requires permission to access the DeleteAuditSuppression action.

```sql
DELETE FROM aws.iot.audit_suppressions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
