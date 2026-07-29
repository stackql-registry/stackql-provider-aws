--- 
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
  - pca_connector_ad
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

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pca_connector_ad.templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_templates"
    values={[
        { label: 'list_templates', value: 'list_templates' },
        { label: 'get_template', value: 'get_template' }
    ]}
>
<TabItem value="list_templates">

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
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateTemplate. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;\/template\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateConnector. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the template. The template name must be unique. (pattern: &lt;code&gt;^(?!^\s+$)((?!&#91;\x5c'\x2b,;&lt;=&gt;#\x22&#93;)(&#91;\x20-\x7E&#93;))+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="object_identifier" /></td>
    <td><code>string</code></td>
    <td>Object identifier of a template. (pattern: &lt;code&gt;^(&#91;0-2&#93;)\.(&#91;0-9&#93;|(&#91;0-3&#93;&#91;0-9&#93;))(\.(&#91;0-9&#93;+))&#123;0,126&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_schema" /></td>
    <td><code>integer</code></td>
    <td>The template schema version. Template schema versions can be v2, v3, or v4. The template configuration options change based on the template schema version.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>object</code></td>
    <td>The revision version of the template. Template updates will increment the minor revision. Re-enrolling all certificate holders will increment the major revision.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the template. Status can be creating, active, deleting, or failed. (ACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the template was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_template">

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
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateTemplate. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;\/template\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateConnector. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the templates. Template names must be unique. (pattern: &lt;code&gt;^(?!^\s+$)((?!&#91;\x5c'\x2b,;&lt;=&gt;#\x22&#93;)(&#91;\x20-\x7E&#93;))+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="object_identifier" /></td>
    <td><code>string</code></td>
    <td>Object identifier of a template. (pattern: &lt;code&gt;^(&#91;0-2&#93;)\.(&#91;0-9&#93;|(&#91;0-3&#93;&#91;0-9&#93;))(\.(&#91;0-9&#93;+))&#123;0,126&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_schema" /></td>
    <td><code>integer</code></td>
    <td>The template schema version. Template schema versions can be v2, v3, or v4. The template configuration options change based on the template schema version.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>object</code></td>
    <td>The version of the template. Template updates will increment the minor revision. Re-enrolling all certificate holders will increment the major revision.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the template. Status can be creating, active, deleting, or failed. (ACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the template was updated.</td>
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
    <td><a href="#list_templates"><CopyableCode code="list_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ConnectorArn"><code>ConnectorArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the templates, if any, that are associated with a connector.</td>
</tr>
<tr>
    <td><a href="#get_template"><CopyableCode code="get_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a certificate template that the connector uses to issue certificates from a private CA.</td>
</tr>
<tr>
    <td><a href="#create_template"><CopyableCode code="create_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectorArn"><code>ConnectorArn</code></a></td>
    <td></td>
    <td>Creates an Active Directory compatible certificate template. The connectors issues certificates using these templates based on the requester’s Active Directory group membership.</td>
</tr>
<tr>
    <td><a href="#update_template"><CopyableCode code="update_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update template configuration to define the information included in certificates.</td>
</tr>
<tr>
    <td><a href="#delete_template"><CopyableCode code="delete_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a template. Certificates issued using the template are still valid until they are revoked or expired.</td>
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
<tr id="parameter-ConnectorArn">
    <td><CopyableCode code="ConnectorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateConnector.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_arn">
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateTemplate.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the NextToken parameter from the response you just received.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_templates"
    values={[
        { label: 'list_templates', value: 'list_templates' },
        { label: 'get_template', value: 'get_template' }
    ]}
>
<TabItem value="list_templates">

Lists the templates, if any, that are associated with a connector.

```sql
SELECT
arn,
connector_arn,
created_at,
definition,
name,
object_identifier,
policy_schema,
revision,
status,
updated_at
FROM aws.pca_connector_ad.templates
WHERE ConnectorArn = '{{ ConnectorArn }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
<TabItem value="get_template">

Retrieves a certificate template that the connector uses to issue certificates from a private CA.

```sql
SELECT
arn,
connector_arn,
created_at,
definition,
name,
object_identifier,
policy_schema,
revision,
status,
updated_at
FROM aws.pca_connector_ad.templates
WHERE template_arn = '{{ template_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_template"
    values={[
        { label: 'create_template', value: 'create_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_template">

Creates an Active Directory compatible certificate template. The connectors issues certificates using these templates based on the requester’s Active Directory group membership.

```sql
INSERT INTO aws.pca_connector_ad.templates (
ClientToken,
ConnectorArn,
Definition,
Name,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ ConnectorArn }}' /* required */,
'{{ Definition }}',
'{{ Name }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
template_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the templates resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: ConnectorArn
      value: "{{ ConnectorArn }}"
    - name: Definition
      description: |
        Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
      value:
        TemplateV2:
          CertificateValidity:
            RenewalPeriod:
              Period: {{ Period }}
              PeriodType: "{{ PeriodType }}"
            ValidityPeriod:
              Period: {{ Period }}
              PeriodType: "{{ PeriodType }}"
          EnrollmentFlags:
            EnableKeyReuseOnNtTokenKeysetStorageFull: {{ EnableKeyReuseOnNtTokenKeysetStorageFull }}
            IncludeSymmetricAlgorithms: {{ IncludeSymmetricAlgorithms }}
            NoSecurityExtension: {{ NoSecurityExtension }}
            RemoveInvalidCertificateFromPersonalStore: {{ RemoveInvalidCertificateFromPersonalStore }}
            UserInteractionRequired: {{ UserInteractionRequired }}
          Extensions:
            ApplicationPolicies:
              Critical: {{ Critical }}
              Policies:
                - PolicyObjectIdentifier: "{{ PolicyObjectIdentifier }}"
                  PolicyType: "{{ PolicyType }}"
            KeyUsage:
              Critical: {{ Critical }}
              UsageFlags:
                DataEncipherment: {{ DataEncipherment }}
                DigitalSignature: {{ DigitalSignature }}
                KeyAgreement: {{ KeyAgreement }}
                KeyEncipherment: {{ KeyEncipherment }}
                NonRepudiation: {{ NonRepudiation }}
          GeneralFlags:
            AutoEnrollment: {{ AutoEnrollment }}
            MachineType: {{ MachineType }}
          PrivateKeyAttributes:
            CryptoProviders:
              - "{{ CryptoProviders }}"
            KeySpec: "{{ KeySpec }}"
            MinimalKeyLength: {{ MinimalKeyLength }}
          PrivateKeyFlags:
            ClientVersion: "{{ ClientVersion }}"
            ExportableKey: {{ ExportableKey }}
            StrongKeyProtectionRequired: {{ StrongKeyProtectionRequired }}
          SubjectNameFlags:
            RequireCommonName: {{ RequireCommonName }}
            RequireDirectoryPath: {{ RequireDirectoryPath }}
            RequireDnsAsCn: {{ RequireDnsAsCn }}
            RequireEmail: {{ RequireEmail }}
            SanRequireDirectoryGuid: {{ SanRequireDirectoryGuid }}
            SanRequireDns: {{ SanRequireDns }}
            SanRequireDomainDns: {{ SanRequireDomainDns }}
            SanRequireEmail: {{ SanRequireEmail }}
            SanRequireSpn: {{ SanRequireSpn }}
            SanRequireUpn: {{ SanRequireUpn }}
          SupersededTemplates:
            - "{{ SupersededTemplates }}"
        TemplateV3:
          CertificateValidity:
            RenewalPeriod:
              Period: {{ Period }}
              PeriodType: "{{ PeriodType }}"
            ValidityPeriod:
              Period: {{ Period }}
              PeriodType: "{{ PeriodType }}"
          EnrollmentFlags:
            EnableKeyReuseOnNtTokenKeysetStorageFull: {{ EnableKeyReuseOnNtTokenKeysetStorageFull }}
            IncludeSymmetricAlgorithms: {{ IncludeSymmetricAlgorithms }}
            NoSecurityExtension: {{ NoSecurityExtension }}
            RemoveInvalidCertificateFromPersonalStore: {{ RemoveInvalidCertificateFromPersonalStore }}
            UserInteractionRequired: {{ UserInteractionRequired }}
          Extensions:
            ApplicationPolicies:
              Critical: {{ Critical }}
              Policies:
                - PolicyObjectIdentifier: "{{ PolicyObjectIdentifier }}"
                  PolicyType: "{{ PolicyType }}"
            KeyUsage:
              Critical: {{ Critical }}
              UsageFlags:
                DataEncipherment: {{ DataEncipherment }}
                DigitalSignature: {{ DigitalSignature }}
                KeyAgreement: {{ KeyAgreement }}
                KeyEncipherment: {{ KeyEncipherment }}
                NonRepudiation: {{ NonRepudiation }}
          GeneralFlags:
            AutoEnrollment: {{ AutoEnrollment }}
            MachineType: {{ MachineType }}
          HashAlgorithm: "{{ HashAlgorithm }}"
          PrivateKeyAttributes:
            Algorithm: "{{ Algorithm }}"
            CryptoProviders:
              - "{{ CryptoProviders }}"
            KeySpec: "{{ KeySpec }}"
            KeyUsageProperty:
              PropertyFlags:
                Decrypt: {{ Decrypt }}
                KeyAgreement: {{ KeyAgreement }}
                Sign: {{ Sign }}
              PropertyType: "{{ PropertyType }}"
            MinimalKeyLength: {{ MinimalKeyLength }}
          PrivateKeyFlags:
            ClientVersion: "{{ ClientVersion }}"
            ExportableKey: {{ ExportableKey }}
            RequireAlternateSignatureAlgorithm: {{ RequireAlternateSignatureAlgorithm }}
            StrongKeyProtectionRequired: {{ StrongKeyProtectionRequired }}
          SubjectNameFlags:
            RequireCommonName: {{ RequireCommonName }}
            RequireDirectoryPath: {{ RequireDirectoryPath }}
            RequireDnsAsCn: {{ RequireDnsAsCn }}
            RequireEmail: {{ RequireEmail }}
            SanRequireDirectoryGuid: {{ SanRequireDirectoryGuid }}
            SanRequireDns: {{ SanRequireDns }}
            SanRequireDomainDns: {{ SanRequireDomainDns }}
            SanRequireEmail: {{ SanRequireEmail }}
            SanRequireSpn: {{ SanRequireSpn }}
            SanRequireUpn: {{ SanRequireUpn }}
          SupersededTemplates:
            - "{{ SupersededTemplates }}"
        TemplateV4:
          CertificateValidity:
            RenewalPeriod:
              Period: {{ Period }}
              PeriodType: "{{ PeriodType }}"
            ValidityPeriod:
              Period: {{ Period }}
              PeriodType: "{{ PeriodType }}"
          EnrollmentFlags:
            EnableKeyReuseOnNtTokenKeysetStorageFull: {{ EnableKeyReuseOnNtTokenKeysetStorageFull }}
            IncludeSymmetricAlgorithms: {{ IncludeSymmetricAlgorithms }}
            NoSecurityExtension: {{ NoSecurityExtension }}
            RemoveInvalidCertificateFromPersonalStore: {{ RemoveInvalidCertificateFromPersonalStore }}
            UserInteractionRequired: {{ UserInteractionRequired }}
          Extensions:
            ApplicationPolicies:
              Critical: {{ Critical }}
              Policies:
                - PolicyObjectIdentifier: "{{ PolicyObjectIdentifier }}"
                  PolicyType: "{{ PolicyType }}"
            KeyUsage:
              Critical: {{ Critical }}
              UsageFlags:
                DataEncipherment: {{ DataEncipherment }}
                DigitalSignature: {{ DigitalSignature }}
                KeyAgreement: {{ KeyAgreement }}
                KeyEncipherment: {{ KeyEncipherment }}
                NonRepudiation: {{ NonRepudiation }}
          GeneralFlags:
            AutoEnrollment: {{ AutoEnrollment }}
            MachineType: {{ MachineType }}
          HashAlgorithm: "{{ HashAlgorithm }}"
          PrivateKeyAttributes:
            Algorithm: "{{ Algorithm }}"
            CryptoProviders:
              - "{{ CryptoProviders }}"
            KeySpec: "{{ KeySpec }}"
            KeyUsageProperty:
              PropertyFlags:
                Decrypt: {{ Decrypt }}
                KeyAgreement: {{ KeyAgreement }}
                Sign: {{ Sign }}
              PropertyType: "{{ PropertyType }}"
            MinimalKeyLength: {{ MinimalKeyLength }}
          PrivateKeyFlags:
            ClientVersion: "{{ ClientVersion }}"
            ExportableKey: {{ ExportableKey }}
            RequireAlternateSignatureAlgorithm: {{ RequireAlternateSignatureAlgorithm }}
            RequireSameKeyRenewal: {{ RequireSameKeyRenewal }}
            StrongKeyProtectionRequired: {{ StrongKeyProtectionRequired }}
            UseLegacyProvider: {{ UseLegacyProvider }}
          SubjectNameFlags:
            RequireCommonName: {{ RequireCommonName }}
            RequireDirectoryPath: {{ RequireDirectoryPath }}
            RequireDnsAsCn: {{ RequireDnsAsCn }}
            RequireEmail: {{ RequireEmail }}
            SanRequireDirectoryGuid: {{ SanRequireDirectoryGuid }}
            SanRequireDns: {{ SanRequireDns }}
            SanRequireDomainDns: {{ SanRequireDomainDns }}
            SanRequireEmail: {{ SanRequireEmail }}
            SanRequireSpn: {{ SanRequireSpn }}
            SanRequireUpn: {{ SanRequireUpn }}
          SupersededTemplates:
            - "{{ SupersededTemplates }}"
    - name: Name
      value: "{{ Name }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_template"
    values={[
        { label: 'update_template', value: 'update_template' }
    ]}
>
<TabItem value="update_template">

Update template configuration to define the information included in certificates.

```sql
UPDATE aws.pca_connector_ad.templates
SET 
Definition = '{{ Definition }}',
ReenrollAllCertificateHolders = {{ ReenrollAllCertificateHolders }}
WHERE 
template_arn = '{{ template_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_template"
    values={[
        { label: 'delete_template', value: 'delete_template' }
    ]}
>
<TabItem value="delete_template">

Deletes a template. Certificates issued using the template are still valid until they are revoked or expired.

```sql
DELETE FROM aws.pca_connector_ad.templates
WHERE template_arn = '{{ template_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
