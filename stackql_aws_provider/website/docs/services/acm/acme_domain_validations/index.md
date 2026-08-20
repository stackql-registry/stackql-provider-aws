--- 
title: acme_domain_validations
hide_title: false
hide_table_of_contents: false
keywords:
  - acme_domain_validations
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

Creates, updates, deletes, gets or lists an <code>acme_domain_validations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="acme_domain_validations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.acm.acme_domain_validations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_acme_domain_validation"
    values={[
        { label: 'describe_acme_domain_validation', value: 'describe_acme_domain_validation' },
        { label: 'list_acme_domain_validations', value: 'list_acme_domain_validations' }
    ]}
>
<TabItem value="describe_acme_domain_validation">

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
    <td><CopyableCode code="acme_domain_validation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACME domain validation. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:acme-endpoint/&#91;a-zA-Z0-9-&#93;+/acme-domain-validation/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="acme_endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACME endpoint. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:acme-endpoint/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the domain validation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name being validated. (pattern: &lt;code&gt;(&#91;a-z0-9&#93;(&#91;a-z0-9-&#93;*&#91;a-z0-9&#93;)?\.)*&#91;a-z0-9&#93;(&#91;a-z0-9-&#93;*&#91;a-z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_details" /></td>
    <td><code>object</code></td>
    <td>Details about the failure, if the validation failed.</td>
</tr>
<tr>
    <td><CopyableCode code="prevalidation_details" /></td>
    <td><code>object</code></td>
    <td>Details about the prevalidation configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="prevalidation_type" /></td>
    <td><code>string</code></td>
    <td>The type of prevalidation used. (DNS_PREVALIDATION)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the domain validation. (VALIDATING, VALID, INVALID, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the domain validation was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_acme_domain_validations">

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
    <td><CopyableCode code="acme_domain_validation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACME domain validation. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:acme-endpoint/&#91;a-zA-Z0-9-&#93;+/acme-domain-validation/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="acme_endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACME endpoint. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:acme-endpoint/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the domain validation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name being validated. (pattern: &lt;code&gt;(&#91;a-z0-9&#93;(&#91;a-z0-9-&#93;*&#91;a-z0-9&#93;)?\.)*&#91;a-z0-9&#93;(&#91;a-z0-9-&#93;*&#91;a-z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_details" /></td>
    <td><code>object</code></td>
    <td>Details about the failure, if the validation failed.</td>
</tr>
<tr>
    <td><CopyableCode code="prevalidation_details" /></td>
    <td><code>object</code></td>
    <td>Details about the prevalidation configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="prevalidation_type" /></td>
    <td><code>string</code></td>
    <td>The type of prevalidation used. (DNS_PREVALIDATION)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the domain validation. (VALIDATING, VALID, INVALID, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the domain validation was last updated.</td>
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
    <td><a href="#describe_acme_domain_validation"><CopyableCode code="describe_acme_domain_validation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed metadata about the specified domain validation, including its status, domain scope, and DNS resource records required for validation.</td>
</tr>
<tr>
    <td><a href="#list_acme_domain_validations"><CopyableCode code="list_acme_domain_validations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of domain validations for the specified ACME endpoint.</td>
</tr>
<tr>
    <td><a href="#create_acme_domain_validation"><CopyableCode code="create_acme_domain_validation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AcmeEndpointArn"><code>AcmeEndpointArn</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-PrevalidationOptions"><code>PrevalidationOptions</code></a></td>
    <td></td>
    <td>Creates a domain validation for an ACME endpoint. Domain validations authorize the endpoint to issue certificates for specified domain names. You configure prevalidation to prove domain ownership.</td>
</tr>
<tr>
    <td><a href="#update_acme_domain_validation"><CopyableCode code="update_acme_domain_validation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AcmeDomainValidationArn"><code>AcmeDomainValidationArn</code></a></td>
    <td></td>
    <td>Updates the prevalidation configuration of an existing domain validation.</td>
</tr>
<tr>
    <td><a href="#delete_acme_domain_validation"><CopyableCode code="delete_acme_domain_validation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a domain validation. After deletion, the ACME endpoint can no longer issue certificates for the associated domain.</td>
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
    defaultValue="describe_acme_domain_validation"
    values={[
        { label: 'describe_acme_domain_validation', value: 'describe_acme_domain_validation' },
        { label: 'list_acme_domain_validations', value: 'list_acme_domain_validations' }
    ]}
>
<TabItem value="describe_acme_domain_validation">

Returns detailed metadata about the specified domain validation, including its status, domain scope, and DNS resource records required for validation.

```sql
SELECT
acme_domain_validation_arn,
acme_endpoint_arn,
created_at,
domain_name,
failure_details,
prevalidation_details,
prevalidation_type,
status,
updated_at
FROM aws.acm.acme_domain_validations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_acme_domain_validations">

Retrieves a list of domain validations for the specified ACME endpoint.

```sql
SELECT
acme_domain_validation_arn,
acme_endpoint_arn,
created_at,
domain_name,
failure_details,
prevalidation_details,
prevalidation_type,
status,
updated_at
FROM aws.acm.acme_domain_validations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_acme_domain_validation"
    values={[
        { label: 'create_acme_domain_validation', value: 'create_acme_domain_validation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_acme_domain_validation">

Creates a domain validation for an ACME endpoint. Domain validations authorize the endpoint to issue certificates for specified domain names. You configure prevalidation to prove domain ownership.

```sql
INSERT INTO aws.acm.acme_domain_validations (
IdempotencyToken,
AcmeEndpointArn,
DomainName,
PrevalidationOptions,
Tags,
region
)
SELECT 
'{{ IdempotencyToken }}',
'{{ AcmeEndpointArn }}' /* required */,
'{{ DomainName }}' /* required */,
'{{ PrevalidationOptions }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
acme_domain_validation_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: acme_domain_validations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the acme_domain_validations resource.
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique, case-sensitive identifier to ensure idempotency of the request.
    - name: AcmeEndpointArn
      value: "{{ AcmeEndpointArn }}"
      description: |
        The Amazon Resource Name (ARN) of the ACME endpoint.
    - name: DomainName
      value: "{{ DomainName }}"
      description: |
        The domain name to validate.
    - name: PrevalidationOptions
      description: |
        The prevalidation options for the domain.
      value:
        DnsPrevalidation:
          DomainScope:
            ExactDomain: "{{ ExactDomain }}"
            Subdomains: "{{ Subdomains }}"
            Wildcards: "{{ Wildcards }}"
          HostedZoneId: "{{ HostedZoneId }}"
    - name: Tags
      description: |
        One or more tags to associate with the domain validation.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_acme_domain_validation"
    values={[
        { label: 'update_acme_domain_validation', value: 'update_acme_domain_validation' }
    ]}
>
<TabItem value="update_acme_domain_validation">

Updates the prevalidation configuration of an existing domain validation.

```sql
UPDATE aws.acm.acme_domain_validations
SET 
AcmeDomainValidationArn = '{{ AcmeDomainValidationArn }}',
PrevalidationOptions = '{{ PrevalidationOptions }}'
WHERE 
region = '{{ region }}' --required
AND AcmeDomainValidationArn = '{{ AcmeDomainValidationArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_acme_domain_validation"
    values={[
        { label: 'delete_acme_domain_validation', value: 'delete_acme_domain_validation' }
    ]}
>
<TabItem value="delete_acme_domain_validation">

Deletes a domain validation. After deletion, the ACME endpoint can no longer issue certificates for the associated domain.

```sql
DELETE FROM aws.acm.acme_domain_validations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
