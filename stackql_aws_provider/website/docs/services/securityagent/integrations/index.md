--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
  - securityagent
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

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_integration"
    values={[
        { label: 'get_integration', value: 'get_integration' },
        { label: 'list_integrations', value: 'list_integrations' }
    ]}
>
<TabItem value="get_integration">

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="installation_id" /></td>
    <td><code>string</code></td>
    <td>The installation identifier from the integration provider.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for an integration.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of a KMS key. Can be a key ID, key ARN, alias name, or alias ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="private_connection_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of a private connection within your account.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Third-party provider type. (GITHUB, GITLAB, BITBUCKET, CONFLUENCE)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_type" /></td>
    <td><code>string</code></td>
    <td>The type of the integration provider. (SOURCE_CODE, DOCUMENTATION)</td>
</tr>
<tr>
    <td><CopyableCode code="target_url" /></td>
    <td><code>string</code></td>
    <td>The HTTPS URL of the customer self-hosted instance, such as a GitHub Enterprise Server or self-managed GitLab instance. This value is absent for SaaS integrations.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_integrations">

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="installation_id" /></td>
    <td><code>string</code></td>
    <td>The installation identifier from the integration provider.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="private_connection_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of a private connection within your account.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Third-party provider type. (GITHUB, GITLAB, BITBUCKET, CONFLUENCE)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_type" /></td>
    <td><code>string</code></td>
    <td>The type of the integration provider. (SOURCE_CODE, DOCUMENTATION)</td>
</tr>
<tr>
    <td><CopyableCode code="target_url" /></td>
    <td><code>string</code></td>
    <td>The HTTPS URL of the customer self-hosted instance, such as a GitHub Enterprise Server or self-managed GitLab instance. This value is absent for SaaS integrations.</td>
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
    <td><a href="#get_integration"><CopyableCode code="get_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an integration.</td>
</tr>
<tr>
    <td><a href="#list_integrations"><CopyableCode code="list_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the integrations in your account, optionally filtered by provider or provider type.</td>
</tr>
<tr>
    <td><a href="#create_integration"><CopyableCode code="create_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-input"><code>input</code></a>, <a href="#parameter-integrationDisplayName"><code>integrationDisplayName</code></a></td>
    <td></td>
    <td>Creates a new integration with a third-party provider, such as GitHub, for code review and remediation.</td>
</tr>
<tr>
    <td><a href="#delete_integration"><CopyableCode code="delete_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an integration with a third-party provider.</td>
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
    defaultValue="get_integration"
    values={[
        { label: 'get_integration', value: 'get_integration' },
        { label: 'list_integrations', value: 'list_integrations' }
    ]}
>
<TabItem value="get_integration">

Retrieves information about an integration.

```sql
SELECT
display_name,
installation_id,
integration_id,
kms_key_id,
private_connection_name,
provider,
provider_type,
target_url
FROM aws.securityagent.integrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_integrations">

Lists the integrations in your account, optionally filtered by provider or provider type.

```sql
SELECT
display_name,
installation_id,
integration_id,
private_connection_name,
provider,
provider_type,
target_url
FROM aws.securityagent.integrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_integration"
    values={[
        { label: 'create_integration', value: 'create_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_integration">

Creates a new integration with a third-party provider, such as GitHub, for code review and remediation.

```sql
INSERT INTO aws.securityagent.integrations (
provider,
input,
integrationDisplayName,
kmsKeyId,
tags,
privateConnectionName,
region
)
SELECT 
'{{ provider }}' /* required */,
'{{ input }}' /* required */,
'{{ integrationDisplayName }}' /* required */,
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ privateConnectionName }}',
'{{ region }}'
RETURNING
integration_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integrations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the integrations resource.
    - name: provider
      value: "{{ provider }}"
      description: |
        Third-party provider type.
      valid_values: ['GITHUB', 'GITLAB', 'BITBUCKET', 'CONFLUENCE']
    - name: input
      description: |
        The provider-specific input for creating an integration. This is a union type that contains provider-specific configuration.
      value:
        github:
          code: "{{ code }}"
          state: "{{ state }}"
          organizationName: "{{ organizationName }}"
          targetUrl: "{{ targetUrl }}"
          installationId: "{{ installationId }}"
        gitlab:
          accessToken: "{{ accessToken }}"
          targetUrl: "{{ targetUrl }}"
          tokenType: "{{ tokenType }}"
          groupId: "{{ groupId }}"
        bitbucket:
          installationId: "{{ installationId }}"
          workspace: "{{ workspace }}"
          code: "{{ code }}"
          state: "{{ state }}"
        confluence:
          installationId: "{{ installationId }}"
          code: "{{ code }}"
          state: "{{ state }}"
          siteUrl: "{{ siteUrl }}"
    - name: integrationDisplayName
      value: "{{ integrationDisplayName }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        Identifier of a KMS key. Can be a key ID, key ARN, alias name, or alias ARN.
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags for a resource.
    - name: privateConnectionName
      value: "{{ privateConnectionName }}"
      description: |
        The unique name of a private connection within your account.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_integration"
    values={[
        { label: 'delete_integration', value: 'delete_integration' }
    ]}
>
<TabItem value="delete_integration">

Deletes an integration with a third-party provider.

```sql
DELETE FROM aws.securityagent.integrations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
