--- 
title: acme_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - acme_endpoints
  - acm
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

Creates, updates, deletes, gets or lists an <code>acme_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="acme_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.acm.acme_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_acme_endpoint"
    values={[
        { label: 'describe_acme_endpoint', value: 'describe_acme_endpoint' },
        { label: 'list_acme_endpoints', value: 'list_acme_endpoints' }
    ]}
>
<TabItem value="describe_acme_endpoint">

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
    <td><CopyableCode code="acme_endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACME endpoint. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:acme-endpoint/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorization_behavior" /></td>
    <td><code>string</code></td>
    <td>The authorization behavior of the ACME endpoint. (PRE_APPROVED)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_authority" /></td>
    <td><code>object</code></td>
    <td>The certificate authority configuration for the ACME endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_tags" /></td>
    <td><code>array</code></td>
    <td>Tags applied to certificates issued through this ACME endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="contact" /></td>
    <td><code>string</code></td>
    <td>Whether ACME clients must provide contact information during account registration. (REQUIRED, NOT_REQUIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ACME endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the ACME endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason the ACME endpoint failed, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ACME endpoint. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ACME endpoint was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_acme_endpoints">

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
    <td><CopyableCode code="acme_endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACME endpoint. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:acme-endpoint/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorization_behavior" /></td>
    <td><code>string</code></td>
    <td>The authorization behavior of the ACME endpoint. (PRE_APPROVED)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_authority" /></td>
    <td><code>object</code></td>
    <td>The certificate authority configuration for the ACME endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_tags" /></td>
    <td><code>array</code></td>
    <td>Tags applied to certificates issued through this ACME endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="contact" /></td>
    <td><code>string</code></td>
    <td>Whether ACME clients must provide contact information during account registration. (REQUIRED, NOT_REQUIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ACME endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the ACME endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason the ACME endpoint failed, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ACME endpoint. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ACME endpoint was last updated.</td>
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
    <td><a href="#describe_acme_endpoint"><CopyableCode code="describe_acme_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed metadata about the specified ACME endpoint, including its status, URL, authorization behavior, and certificate authority configuration.</td>
</tr>
<tr>
    <td><a href="#list_acme_endpoints"><CopyableCode code="list_acme_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of ACME endpoints in your account. Use this operation to view all configured ACME endpoints and their current status.</td>
</tr>
<tr>
    <td><a href="#create_acme_endpoint"><CopyableCode code="create_acme_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AuthorizationBehavior"><code>AuthorizationBehavior</code></a>, <a href="#parameter-CertificateAuthority"><code>CertificateAuthority</code></a></td>
    <td></td>
    <td>Creates an ACME endpoint, which is a managed ACME server with a unique endpoint URL. After creation, ACME clients can use the endpoint URL to automate certificate issuance using the ACME protocol.</td>
</tr>
<tr>
    <td><a href="#update_acme_endpoint"><CopyableCode code="update_acme_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AcmeEndpointArn"><code>AcmeEndpointArn</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing ACME endpoint. You can change the authorization behavior, contact requirement, or certificate authority settings.</td>
</tr>
<tr>
    <td><a href="#delete_acme_endpoint"><CopyableCode code="delete_acme_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an ACME endpoint. After deletion, the endpoint URL is no longer accessible and ACME clients cannot issue certificates through it. Any existing external account bindings and domain validations associated with the endpoint are also deleted.</td>
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
    defaultValue="describe_acme_endpoint"
    values={[
        { label: 'describe_acme_endpoint', value: 'describe_acme_endpoint' },
        { label: 'list_acme_endpoints', value: 'list_acme_endpoints' }
    ]}
>
<TabItem value="describe_acme_endpoint">

Returns detailed metadata about the specified ACME endpoint, including its status, URL, authorization behavior, and certificate authority configuration.

```sql
SELECT
acme_endpoint_arn,
authorization_behavior,
certificate_authority,
certificate_tags,
contact,
created_at,
endpoint_url,
failure_reason,
status,
updated_at
FROM aws.acm.acme_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_acme_endpoints">

Retrieves a list of ACME endpoints in your account. Use this operation to view all configured ACME endpoints and their current status.

```sql
SELECT
acme_endpoint_arn,
authorization_behavior,
certificate_authority,
certificate_tags,
contact,
created_at,
endpoint_url,
failure_reason,
status,
updated_at
FROM aws.acm.acme_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_acme_endpoint"
    values={[
        { label: 'create_acme_endpoint', value: 'create_acme_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_acme_endpoint">

Creates an ACME endpoint, which is a managed ACME server with a unique endpoint URL. After creation, ACME clients can use the endpoint URL to automate certificate issuance using the ACME protocol.

```sql
INSERT INTO aws.acm.acme_endpoints (
IdempotencyToken,
AuthorizationBehavior,
Contact,
CertificateAuthority,
Tags,
CertificateTags,
region
)
SELECT 
'{{ IdempotencyToken }}',
'{{ AuthorizationBehavior }}' /* required */,
'{{ Contact }}',
'{{ CertificateAuthority }}' /* required */,
'{{ Tags }}',
'{{ CertificateTags }}',
'{{ region }}'
RETURNING
acme_endpoint_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: acme_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the acme_endpoints resource.
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique, case-sensitive identifier to ensure idempotency of the request.
    - name: AuthorizationBehavior
      value: "{{ AuthorizationBehavior }}"
      description: |
        The authorization behavior for the ACME endpoint.
      valid_values: ['PRE_APPROVED']
    - name: Contact
      value: "{{ Contact }}"
      description: |
        Specifies whether ACME clients must provide contact information during account registration.
      valid_values: ['REQUIRED', 'NOT_REQUIRED']
    - name: CertificateAuthority
      description: |
        The type of certificate authority to use for issuing certificates through this ACME endpoint.
      value:
        PublicCertificateAuthority:
          AllowedKeyAlgorithms:
            - "{{ AllowedKeyAlgorithms }}"
    - name: Tags
      description: |
        One or more tags to associate with the ACME endpoint.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: CertificateTags
      description: |
        Tags to apply to certificates issued through this ACME endpoint.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_acme_endpoint"
    values={[
        { label: 'update_acme_endpoint', value: 'update_acme_endpoint' }
    ]}
>
<TabItem value="update_acme_endpoint">

Updates the configuration of an existing ACME endpoint. You can change the authorization behavior, contact requirement, or certificate authority settings.

```sql
UPDATE aws.acm.acme_endpoints
SET 
AcmeEndpointArn = '{{ AcmeEndpointArn }}',
AuthorizationBehavior = '{{ AuthorizationBehavior }}',
Contact = '{{ Contact }}',
CertificateAuthority = '{{ CertificateAuthority }}'
WHERE 
region = '{{ region }}' --required
AND AcmeEndpointArn = '{{ AcmeEndpointArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_acme_endpoint"
    values={[
        { label: 'delete_acme_endpoint', value: 'delete_acme_endpoint' }
    ]}
>
<TabItem value="delete_acme_endpoint">

Deletes an ACME endpoint. After deletion, the endpoint URL is no longer accessible and ACME clients cannot issue certificates through it. Any existing external account bindings and domain validations associated with the endpoint are also deleted.

```sql
DELETE FROM aws.acm.acme_endpoints
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
