--- 
title: partners
hide_title: false
hide_table_of_contents: false
keywords:
  - partners
  - partnercentral_account
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

Creates, updates, deletes, gets or lists a <code>partners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_account.partners" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_partner"
    values={[
        { label: 'get_partner', value: 'get_partner' },
        { label: 'list_partners', value: 'list_partners' }
    ]}
>
<TabItem value="get_partner">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the partner account. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+:partnercentral:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:catalog/&#91;A-Za-z-_&#93;+/partner/partner-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AwsTrainingCertificationEmailDomains" /></td>
    <td><code>array</code></td>
    <td>The list of verified email domains associated with AWS training and certification credentials for the partner organization.</td>
</tr>
<tr>
    <td><CopyableCode code="Catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier for the partner account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the partner account was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the partner account. (pattern: &lt;code&gt;partner-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LegalName" /></td>
    <td><code>string</code></td>
    <td>The legal name of the partner organization. (pattern: &lt;code&gt;&#91;\u0020-\u007E\u00A0-\uD7FF\uE000-\uFFFD&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Profile" /></td>
    <td><code>object</code></td>
    <td>The partner profile information including display name, description, and other public details.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_partners">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the partner account. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+:partnercentral:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:catalog/&#91;A-Za-z-_&#93;+/partner/partner-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier for the partner account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the partner account was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the partner account. (pattern: &lt;code&gt;partner-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LegalName" /></td>
    <td><code>string</code></td>
    <td>The legal name of the partner organization. (pattern: &lt;code&gt;&#91;\u0020-\u007E\u00A0-\uD7FF\uE000-\uFFFD&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_partner"><CopyableCode code="get_partner" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific partner account.</td>
</tr>
<tr>
    <td><a href="#list_partners"><CopyableCode code="list_partners" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists partner accounts in the catalog, providing a summary view of all partners.</td>
</tr>
<tr>
    <td><a href="#create_partner"><CopyableCode code="create_partner" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LegalName"><code>LegalName</code></a>, <a href="#parameter-PrimarySolutionType"><code>PrimarySolutionType</code></a>, <a href="#parameter-AllianceLeadContact"><code>AllianceLeadContact</code></a>, <a href="#parameter-EmailVerificationCode"><code>EmailVerificationCode</code></a></td>
    <td></td>
    <td>Creates a new partner account in the AWS Partner Network with the specified details and configuration.</td>
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
    defaultValue="get_partner"
    values={[
        { label: 'get_partner', value: 'get_partner' },
        { label: 'list_partners', value: 'list_partners' }
    ]}
>
<TabItem value="get_partner">

Retrieves detailed information about a specific partner account.

```sql
SELECT
Arn,
AwsTrainingCertificationEmailDomains,
Catalog,
CreatedAt,
Id,
LegalName,
Profile
FROM aws.partnercentral_account.partners
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_partners">

Lists partner accounts in the catalog, providing a summary view of all partners.

```sql
SELECT
Arn,
Catalog,
CreatedAt,
Id,
LegalName
FROM aws.partnercentral_account.partners
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_partner"
    values={[
        { label: 'create_partner', value: 'create_partner' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_partner">

Creates a new partner account in the AWS Partner Network with the specified details and configuration.

```sql
INSERT INTO aws.partnercentral_account.partners (
Catalog,
ClientToken,
LegalName,
PrimarySolutionType,
AllianceLeadContact,
EmailVerificationCode,
Tags,
region
)
SELECT 
'{{ Catalog }}',
'{{ ClientToken }}',
'{{ LegalName }}' /* required */,
'{{ PrimarySolutionType }}' /* required */,
'{{ AllianceLeadContact }}' /* required */,
'{{ EmailVerificationCode }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
AllianceLeadContact,
Arn,
AwsTrainingCertificationEmailDomains,
Catalog,
CreatedAt,
Id,
LegalName,
Profile
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: partners
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the partners resource.
    - name: Catalog
      value: "{{ Catalog }}"
      description: |
        The catalog identifier where the partner account will be created.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    - name: LegalName
      value: "{{ LegalName }}"
      description: |
        The legal name of the organization becoming a partner.
    - name: PrimarySolutionType
      value: "{{ PrimarySolutionType }}"
      description: |
        The primary type of solution or service the partner provides (e.g., consulting, software, managed services).
      valid_values: ['SOFTWARE_PRODUCTS', 'CONSULTING_SERVICES', 'PROFESSIONAL_SERVICES', 'MANAGED_SERVICES', 'HARDWARE_PRODUCTS', 'COMMUNICATION_SERVICES', 'VALUE_ADDED_RESALE_AWS_SERVICES', 'TRAINING_SERVICES']
    - name: AllianceLeadContact
      description: |
        The primary contact person for alliance and partnership matters.
      value:
        FirstName: "{{ FirstName }}"
        LastName: "{{ LastName }}"
        Email: "{{ Email }}"
        BusinessTitle: "{{ BusinessTitle }}"
    - name: EmailVerificationCode
      value: "{{ EmailVerificationCode }}"
      description: |
        The verification code sent to the alliance lead contact's email to confirm account creation.
    - name: Tags
      description: |
        A list of tags to associate with the partner account for organization and billing purposes.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>
