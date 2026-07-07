--- 
title: security_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - security_configs
  - opensearchserverless
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

Creates, updates, deletes, gets or lists a <code>security_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearchserverless.security_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_config"
    values={[
        { label: 'get_security_config', value: 'get_security_config' },
        { label: 'list_security_configs', value: 'list_security_configs' }
    ]}
>
<TabItem value="get_security_config">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the security configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="configVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the security configuration. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z+/&#93;&#123;4&#125;)*((&#91;0-9a-zA-Z+/&#93;&#123;2&#125;==)|(&#91;0-9a-zA-Z+/&#93;&#123;3&#125;=))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date the configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the security configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="iamFederationOptions" /></td>
    <td><code>object</code></td>
    <td>Describes IAM federation options in the form of a key-value map. Contains configuration details about how OpenSearch Serverless integrates with external identity providers through federation.</td>
</tr>
<tr>
    <td><CopyableCode code="iamIdentityCenterOptions" /></td>
    <td><code>object</code></td>
    <td>Describes IAM Identity Center options in the form of a key-value map.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp of when the configuration was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="samlOptions" /></td>
    <td><code>object</code></td>
    <td>SAML options for the security configuration in the form of a key-value map.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of security configuration. (saml, iamidentitycenter, iamfederation)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_configs">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</td>
</tr>
<tr>
    <td><CopyableCode code="securityConfigSummaries" /></td>
    <td><code>array</code></td>
    <td>Details about the security configurations in your account.</td>
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
    <td><a href="#get_security_config"><CopyableCode code="get_security_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an OpenSearch Serverless security configuration. For more information, see SAML authentication for Amazon OpenSearch Serverless.</td>
</tr>
<tr>
    <td><a href="#list_security_configs"><CopyableCode code="list_security_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about configured OpenSearch Serverless security configurations. For more information, see SAML authentication for Amazon OpenSearch Serverless.</td>
</tr>
<tr>
    <td><a href="#create_security_config"><CopyableCode code="create_security_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Specifies a security configuration for OpenSearch Serverless. For more information, see SAML authentication for Amazon OpenSearch Serverless.</td>
</tr>
<tr>
    <td><a href="#update_security_config"><CopyableCode code="update_security_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-configVersion"><code>configVersion</code></a></td>
    <td></td>
    <td>Updates a security configuration for OpenSearch Serverless. For more information, see SAML authentication for Amazon OpenSearch Serverless.</td>
</tr>
<tr>
    <td><a href="#delete_security_config"><CopyableCode code="delete_security_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a security configuration for OpenSearch Serverless. For more information, see SAML authentication for Amazon OpenSearch Serverless.</td>
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
    defaultValue="get_security_config"
    values={[
        { label: 'get_security_config', value: 'get_security_config' },
        { label: 'list_security_configs', value: 'list_security_configs' }
    ]}
>
<TabItem value="get_security_config">

Returns information about an OpenSearch Serverless security configuration. For more information, see SAML authentication for Amazon OpenSearch Serverless.

```sql
SELECT
id,
configVersion,
createdDate,
description,
iamFederationOptions,
iamIdentityCenterOptions,
lastModifiedDate,
samlOptions,
type_
FROM aws.opensearchserverless.security_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_security_configs">

Returns information about configured OpenSearch Serverless security configurations. For more information, see SAML authentication for Amazon OpenSearch Serverless.

```sql
SELECT
nextToken,
securityConfigSummaries
FROM aws.opensearchserverless.security_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_config"
    values={[
        { label: 'create_security_config', value: 'create_security_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_config">

Specifies a security configuration for OpenSearch Serverless. For more information, see SAML authentication for Amazon OpenSearch Serverless.

```sql
INSERT INTO aws.opensearchserverless.security_configs (
type,
name,
description,
samlOptions,
iamIdentityCenterOptions,
iamFederationOptions,
clientToken,
region
)
SELECT 
'{{ type }}' /* required */,
'{{ name }}' /* required */,
'{{ description }}',
'{{ samlOptions }}',
'{{ iamIdentityCenterOptions }}',
'{{ iamFederationOptions }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
securityConfigDetail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: security_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the security_configs resource.
    - name: type
      value: "{{ type }}"
      description: |
        The type of security configuration.
      valid_values: ['saml', 'iamidentitycenter', 'iamfederation']
    - name: name
      value: "{{ name }}"
      description: |
        The name of the security configuration.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the security configuration.
    - name: samlOptions
      description: |
        Describes SAML options in the form of a key-value map. This field is required if you specify SAML for the type parameter.
      value:
        metadata: "{{ metadata }}"
        userAttribute: "{{ userAttribute }}"
        groupAttribute: "{{ groupAttribute }}"
        openSearchServerlessEntityId: "{{ openSearchServerlessEntityId }}"
        sessionTimeout: {{ sessionTimeout }}
    - name: iamIdentityCenterOptions
      description: |
        Describes IAM Identity Center options in the form of a key-value map. This field is required if you specify iamidentitycenter for the type parameter.
      value:
        instanceArn: "{{ instanceArn }}"
        userAttribute: "{{ userAttribute }}"
        groupAttribute: "{{ groupAttribute }}"
    - name: iamFederationOptions
      description: |
        Describes IAM federation options in the form of a key-value map. This field is required if you specify iamFederation for the type parameter.
      value:
        groupAttribute: "{{ groupAttribute }}"
        userAttribute: "{{ userAttribute }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Unique, case-sensitive identifier to ensure idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_security_config"
    values={[
        { label: 'update_security_config', value: 'update_security_config' }
    ]}
>
<TabItem value="update_security_config">

Updates a security configuration for OpenSearch Serverless. For more information, see SAML authentication for Amazon OpenSearch Serverless.

```sql
UPDATE aws.opensearchserverless.security_configs
SET 
id = '{{ id }}',
configVersion = '{{ configVersion }}',
description = '{{ description }}',
samlOptions = '{{ samlOptions }}',
iamIdentityCenterOptionsUpdates = '{{ iamIdentityCenterOptionsUpdates }}',
iamFederationOptions = '{{ iamFederationOptions }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND id = '{{ id }}' --required
AND configVersion = '{{ configVersion }}' --required
RETURNING
securityConfigDetail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_config"
    values={[
        { label: 'delete_security_config', value: 'delete_security_config' }
    ]}
>
<TabItem value="delete_security_config">

Deletes a security configuration for OpenSearch Serverless. For more information, see SAML authentication for Amazon OpenSearch Serverless.

```sql
DELETE FROM aws.opensearchserverless.security_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
