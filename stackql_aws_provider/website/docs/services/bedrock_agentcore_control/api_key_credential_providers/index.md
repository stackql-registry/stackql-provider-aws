--- 
title: api_key_credential_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - api_key_credential_providers
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists an <code>api_key_credential_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_key_credential_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.api_key_credential_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_api_key_credential_provider"
    values={[
        { label: 'get_api_key_credential_provider', value: 'get_api_key_credential_provider' },
        { label: 'list_api_key_credential_providers', value: 'list_api_key_credential_providers' }
    ]}
>
<TabItem value="get_api_key_credential_provider">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the API key credential provider. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="apiKeySecretArn" /></td>
    <td><code>object</code></td>
    <td>Contains information about a secret in AWS Secrets Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the API key credential provider was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credentialProviderArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the API key credential provider. (pattern: &lt;code&gt;arn:(aws|aws-us-gov):acps:&#91;A-Za-z0-9-&#93;&#123;1,64&#125;:&#91;0-9&#93;&#123;12&#125;:token-vault/&#91;a-zA-Z0-9-.&#93;+/apikeycredentialprovider/&#91;a-zA-Z0-9-.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the API key credential provider was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_api_key_credential_providers">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the API key credential provider. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the API key credential provider was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credentialProviderArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the API key credential provider. (pattern: &lt;code&gt;arn:(aws|aws-us-gov):acps:&#91;A-Za-z0-9-&#93;&#123;1,64&#125;:&#91;0-9&#93;&#123;12&#125;:token-vault/&#91;a-zA-Z0-9-.&#93;+/apikeycredentialprovider/&#91;a-zA-Z0-9-.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the API key credential provider was last updated.</td>
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
    <td><a href="#get_api_key_credential_provider"><CopyableCode code="get_api_key_credential_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an API key credential provider.</td>
</tr>
<tr>
    <td><a href="#list_api_key_credential_providers"><CopyableCode code="list_api_key_credential_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all API key credential providers in your account.</td>
</tr>
<tr>
    <td><a href="#create_api_key_credential_provider"><CopyableCode code="create_api_key_credential_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-apiKey"><code>apiKey</code></a></td>
    <td></td>
    <td>Creates a new API key credential provider.</td>
</tr>
<tr>
    <td><a href="#update_api_key_credential_provider"><CopyableCode code="update_api_key_credential_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-apiKey"><code>apiKey</code></a></td>
    <td></td>
    <td>Updates an existing API key credential provider.</td>
</tr>
<tr>
    <td><a href="#delete_api_key_credential_provider"><CopyableCode code="delete_api_key_credential_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an API key credential provider.</td>
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
    defaultValue="get_api_key_credential_provider"
    values={[
        { label: 'get_api_key_credential_provider', value: 'get_api_key_credential_provider' },
        { label: 'list_api_key_credential_providers', value: 'list_api_key_credential_providers' }
    ]}
>
<TabItem value="get_api_key_credential_provider">

Retrieves information about an API key credential provider.

```sql
SELECT
name,
apiKeySecretArn,
createdTime,
credentialProviderArn,
lastUpdatedTime
FROM aws.bedrock_agentcore_control.api_key_credential_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_api_key_credential_providers">

Lists all API key credential providers in your account.

```sql
SELECT
name,
createdTime,
credentialProviderArn,
lastUpdatedTime
FROM aws.bedrock_agentcore_control.api_key_credential_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_api_key_credential_provider"
    values={[
        { label: 'create_api_key_credential_provider', value: 'create_api_key_credential_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_api_key_credential_provider">

Creates a new API key credential provider.

```sql
INSERT INTO aws.bedrock_agentcore_control.api_key_credential_providers (
name,
apiKey,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ apiKey }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
name,
apiKeySecretArn,
credentialProviderArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: api_key_credential_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the api_key_credential_providers resource.
    - name: name
      value: "{{ name }}"
    - name: apiKey
      value: "{{ apiKey }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_api_key_credential_provider"
    values={[
        { label: 'update_api_key_credential_provider', value: 'update_api_key_credential_provider' }
    ]}
>
<TabItem value="update_api_key_credential_provider">

Updates an existing API key credential provider.

```sql
UPDATE aws.bedrock_agentcore_control.api_key_credential_providers
SET 
name = '{{ name }}',
apiKey = '{{ apiKey }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND apiKey = '{{ apiKey }}' --required
RETURNING
name,
apiKeySecretArn,
createdTime,
credentialProviderArn,
lastUpdatedTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_api_key_credential_provider"
    values={[
        { label: 'delete_api_key_credential_provider', value: 'delete_api_key_credential_provider' }
    ]}
>
<TabItem value="delete_api_key_credential_provider">

Deletes an API key credential provider.

```sql
DELETE FROM aws.bedrock_agentcore_control.api_key_credential_providers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
