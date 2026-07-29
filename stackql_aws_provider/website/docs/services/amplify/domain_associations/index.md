--- 
title: domain_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_associations
  - amplify
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

Creates, updates, deletes, gets or lists a <code>domain_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplify.domain_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_association"
    values={[
        { label: 'get_domain_association', value: 'get_domain_association' },
        { label: 'list_domain_associations', value: 'list_domain_associations' }
    ]}
>
<TabItem value="get_domain_association">

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
    <td><CopyableCode code="auto_sub_domain_creation_patterns" /></td>
    <td><code>array</code></td>
    <td>Sets branch patterns for automatic subdomain creation.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_sub_domain_iam_role" /></td>
    <td><code>string</code></td>
    <td>The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains. (pattern: &lt;code&gt;^$|^arn:aws:iam::\d&#123;12&#125;:role.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate" /></td>
    <td><code>object</code></td>
    <td>Describes the SSL/TLS certificate for the domain association. This can be your own custom certificate or the default certificate that Amplify provisions for you. If you are updating your domain to use a different certificate, certificate points to the new certificate that is being created instead of the current active certificate. Otherwise, certificate points to the current active certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_verification_dns_record" /></td>
    <td><code>string</code></td>
    <td>The DNS record for certificate verification.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the domain association.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain. (pattern: &lt;code&gt;^(((?!-)&#91;A-Za-z0-9-&#93;&#123;0,62&#125;&#91;A-Za-z0-9&#93;)\.)+((?!-)&#91;A-Za-z0-9-&#93;&#123;1,62&#125;&#91;A-Za-z0-9&#93;)(\.)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the domain association. (PENDING_VERIFICATION, IN_PROGRESS, AVAILABLE, IMPORTING_CUSTOM_CERTIFICATE, PENDING_DEPLOYMENT, AWAITING_APP_CNAME, FAILED, CREATING, REQUESTING_CERTIFICATE, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_auto_sub_domain" /></td>
    <td><code>boolean</code></td>
    <td>Enables the automated creation of subdomains for branches.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information that describes why the domain association is in the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="sub_domains" /></td>
    <td><code>array</code></td>
    <td>The subdomains for the domain association.</td>
</tr>
<tr>
    <td><CopyableCode code="update_status" /></td>
    <td><code>string</code></td>
    <td>The status of the domain update operation that is currently in progress. The following list describes the valid update states. REQUESTING_CERTIFICATE The certificate is in the process of being updated. PENDING_VERIFICATION Indicates that an Amplify managed certificate is in the process of being verified. This occurs during the creation of a custom domain or when a custom domain is updated to use a managed certificate. IMPORTING_CUSTOM_CERTIFICATE Indicates that an Amplify custom certificate is in the process of being imported. This occurs during the creation of a custom domain or when a custom domain is updated to use a custom certificate. PENDING_DEPLOYMENT Indicates that the subdomain or certificate changes are being propagated. AWAITING_APP_CNAME Amplify is waiting for CNAME records corresponding to subdomains to be propagated. If your custom domain is on Route 53, Amplify handles this for you automatically. For more information about custom domains, see Setting up custom domains in the Amplify Hosting User Guide. UPDATE_COMPLETE The certificate has been associated with a domain. UPDATE_FAILED The certificate has failed to be provisioned or associated, and there is no existing active certificate to roll back to. (REQUESTING_CERTIFICATE, PENDING_VERIFICATION, IMPORTING_CUSTOM_CERTIFICATE, PENDING_DEPLOYMENT, AWAITING_APP_CNAME, UPDATE_COMPLETE, UPDATE_FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_domain_associations">

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
    <td><CopyableCode code="auto_sub_domain_creation_patterns" /></td>
    <td><code>array</code></td>
    <td>Sets branch patterns for automatic subdomain creation.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_sub_domain_iam_role" /></td>
    <td><code>string</code></td>
    <td>The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains. (pattern: &lt;code&gt;^$|^arn:aws:iam::\d&#123;12&#125;:role.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate" /></td>
    <td><code>object</code></td>
    <td>Describes the SSL/TLS certificate for the domain association. This can be your own custom certificate or the default certificate that Amplify provisions for you. If you are updating your domain to use a different certificate, certificate points to the new certificate that is being created instead of the current active certificate. Otherwise, certificate points to the current active certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_verification_dns_record" /></td>
    <td><code>string</code></td>
    <td>The DNS record for certificate verification.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the domain association.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain. (pattern: &lt;code&gt;^(((?!-)&#91;A-Za-z0-9-&#93;&#123;0,62&#125;&#91;A-Za-z0-9&#93;)\.)+((?!-)&#91;A-Za-z0-9-&#93;&#123;1,62&#125;&#91;A-Za-z0-9&#93;)(\.)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the domain association. (PENDING_VERIFICATION, IN_PROGRESS, AVAILABLE, IMPORTING_CUSTOM_CERTIFICATE, PENDING_DEPLOYMENT, AWAITING_APP_CNAME, FAILED, CREATING, REQUESTING_CERTIFICATE, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_auto_sub_domain" /></td>
    <td><code>boolean</code></td>
    <td>Enables the automated creation of subdomains for branches.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information that describes why the domain association is in the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="sub_domains" /></td>
    <td><code>array</code></td>
    <td>The subdomains for the domain association.</td>
</tr>
<tr>
    <td><CopyableCode code="update_status" /></td>
    <td><code>string</code></td>
    <td>The status of the domain update operation that is currently in progress. The following list describes the valid update states. REQUESTING_CERTIFICATE The certificate is in the process of being updated. PENDING_VERIFICATION Indicates that an Amplify managed certificate is in the process of being verified. This occurs during the creation of a custom domain or when a custom domain is updated to use a managed certificate. IMPORTING_CUSTOM_CERTIFICATE Indicates that an Amplify custom certificate is in the process of being imported. This occurs during the creation of a custom domain or when a custom domain is updated to use a custom certificate. PENDING_DEPLOYMENT Indicates that the subdomain or certificate changes are being propagated. AWAITING_APP_CNAME Amplify is waiting for CNAME records corresponding to subdomains to be propagated. If your custom domain is on Route 53, Amplify handles this for you automatically. For more information about custom domains, see Setting up custom domains in the Amplify Hosting User Guide. UPDATE_COMPLETE The certificate has been associated with a domain. UPDATE_FAILED The certificate has failed to be provisioned or associated, and there is no existing active certificate to roll back to. (REQUESTING_CERTIFICATE, PENDING_VERIFICATION, IMPORTING_CUSTOM_CERTIFICATE, PENDING_DEPLOYMENT, AWAITING_APP_CNAME, UPDATE_COMPLETE, UPDATE_FAILED)</td>
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
    <td><a href="#get_domain_association"><CopyableCode code="get_domain_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the domain information for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#list_domain_associations"><CopyableCode code="list_domain_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns the domain associations for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#create_domain_association"><CopyableCode code="create_domain_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domainName"><code>domainName</code></a>, <a href="#parameter-subDomainSettings"><code>subDomainSettings</code></a></td>
    <td></td>
    <td>Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app</td>
</tr>
<tr>
    <td><a href="#update_domain_association"><CopyableCode code="update_domain_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new domain association for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#delete_domain_association"><CopyableCode code="delete_domain_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a domain association for an Amplify app.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique id for an Amplify app.</td>
</tr>
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to list in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token. Set to null to start listing apps from the start. If non-null, a pagination token is returned in a result. Pass its value in here to list more projects.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_domain_association"
    values={[
        { label: 'get_domain_association', value: 'get_domain_association' },
        { label: 'list_domain_associations', value: 'list_domain_associations' }
    ]}
>
<TabItem value="get_domain_association">

Returns the domain information for an Amplify app.

```sql
SELECT
auto_sub_domain_creation_patterns,
auto_sub_domain_iam_role,
certificate,
certificate_verification_dns_record,
domain_association_arn,
domain_name,
domain_status,
enable_auto_sub_domain,
status_reason,
sub_domains,
update_status
FROM aws.amplify.domain_associations
WHERE app_id = '{{ app_id }}' -- required
AND domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_domain_associations">

Returns the domain associations for an Amplify app.

```sql
SELECT
auto_sub_domain_creation_patterns,
auto_sub_domain_iam_role,
certificate,
certificate_verification_dns_record,
domain_association_arn,
domain_name,
domain_status,
enable_auto_sub_domain,
status_reason,
sub_domains,
update_status
FROM aws.amplify.domain_associations
WHERE app_id = '{{ app_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain_association"
    values={[
        { label: 'create_domain_association', value: 'create_domain_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain_association">

Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app

```sql
INSERT INTO aws.amplify.domain_associations (
domainName,
enableAutoSubDomain,
subDomainSettings,
autoSubDomainCreationPatterns,
autoSubDomainIAMRole,
certificateSettings,
app_id,
region
)
SELECT 
'{{ domainName }}' /* required */,
{{ enableAutoSubDomain }},
'{{ subDomainSettings }}' /* required */,
'{{ autoSubDomainCreationPatterns }}',
'{{ autoSubDomainIAMRole }}',
'{{ certificateSettings }}',
'{{ app_id }}',
'{{ region }}'
RETURNING
domain_association
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domain_associations
  props:
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the domain_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domain_associations resource.
    - name: domainName
      value: "{{ domainName }}"
    - name: enableAutoSubDomain
      value: {{ enableAutoSubDomain }}
    - name: subDomainSettings
      value:
        - prefix: "{{ prefix }}"
          branchName: "{{ branchName }}"
    - name: autoSubDomainCreationPatterns
      value:
        - "{{ autoSubDomainCreationPatterns }}"
    - name: autoSubDomainIAMRole
      value: "{{ autoSubDomainIAMRole }}"
    - name: certificateSettings
      description: |
        The type of SSL/TLS certificate to use for your custom domain. If a certificate type isn't specified, Amplify uses the default AMPLIFY_MANAGED certificate.
      value:
        type_: "{{ type_ }}"
        customCertificateArn: "{{ customCertificateArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_domain_association"
    values={[
        { label: 'update_domain_association', value: 'update_domain_association' }
    ]}
>
<TabItem value="update_domain_association">

Creates a new domain association for an Amplify app.

```sql
UPDATE aws.amplify.domain_associations
SET 
enableAutoSubDomain = {{ enableAutoSubDomain }},
subDomainSettings = '{{ subDomainSettings }}',
autoSubDomainCreationPatterns = '{{ autoSubDomainCreationPatterns }}',
autoSubDomainIAMRole = '{{ autoSubDomainIAMRole }}',
certificateSettings = '{{ certificateSettings }}'
WHERE 
app_id = '{{ app_id }}' --required
AND domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
RETURNING
domain_association;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain_association"
    values={[
        { label: 'delete_domain_association', value: 'delete_domain_association' }
    ]}
>
<TabItem value="delete_domain_association">

Deletes a domain association for an Amplify app.

```sql
DELETE FROM aws.amplify.domain_associations
WHERE app_id = '{{ app_id }}' --required
AND domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
