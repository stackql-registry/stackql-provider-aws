--- 
title: registries
hide_title: false
hide_table_of_contents: false
keywords:
  - registries
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

Creates, updates, deletes, gets or lists a <code>registries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.registries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_registry"
    values={[
        { label: 'get_registry', value: 'get_registry' },
        { label: 'list_registries', value: 'list_registries' }
    ]}
>
<TabItem value="get_registry">

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
    <td>The name of the registry. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_\-\.\/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="approval_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for the registry record approval workflow. Controls whether records added to the registry require explicit approval before becoming active.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_configuration" /></td>
    <td><code>object</code></td>
    <td>Represents inbound authorization configuration options used to authenticate incoming requests.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_type" /></td>
    <td><code>string</code></td>
    <td>The type of authorizer used by the registry. This controls the authorization method for the Search and Invoke APIs used by consumers. CUSTOM_JWT - Authorize with a bearer token. AWS_IAM - Authorize with your Amazon Web Services IAM credentials. (CUSTOM_JWT, AWS_IAM)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the registry.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the registry. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the registry. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the registry. Possible values include CREATING, READY, UPDATING, CREATE_FAILED, UPDATE_FAILED, DELETING, and DELETE_FAILED. (CREATING, READY, UPDATING, CREATE_FAILED, UPDATE_FAILED, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status, typically set when the status is a failure state.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_registries">

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
    <td>The name of the registry. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_\-\.\/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_type" /></td>
    <td><code>string</code></td>
    <td>The type of authorizer used by the registry. This controls the authorization method for the Search and Invoke APIs used by consumers. CUSTOM_JWT - Authorize with a bearer token. AWS_IAM - Authorize with your Amazon Web Services IAM credentials. (CUSTOM_JWT, AWS_IAM)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the registry.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the registry. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the registry. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the registry. Possible values include CREATING, READY, UPDATING, CREATE_FAILED, UPDATE_FAILED, DELETING, and DELETE_FAILED. (CREATING, READY, UPDATING, CREATE_FAILED, UPDATE_FAILED, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status, typically set when the status is a failure state.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry was last updated.</td>
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
    <td><a href="#get_registry"><CopyableCode code="get_registry" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific registry.</td>
</tr>
<tr>
    <td><a href="#list_registries"><CopyableCode code="list_registries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-authorizerType"><code>authorizerType</code></a></td>
    <td>Lists all registries in the account. You can optionally filter results by status using the status parameter, or by authorizer type using the authorizerType parameter.</td>
</tr>
<tr>
    <td><a href="#create_registry"><CopyableCode code="create_registry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new registry in your Amazon Web Services account. A registry serves as a centralized catalog for organizing and managing registry records, including MCP servers, A2A agents, agent skills, and custom resource types. If you specify CUSTOM_JWT as the authorizerType, you must provide an authorizerConfiguration.</td>
</tr>
<tr>
    <td><a href="#update_registry"><CopyableCode code="update_registry" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing registry. This operation uses PATCH semantics, so you only need to specify the fields you want to change.</td>
</tr>
<tr>
    <td><a href="#delete_registry"><CopyableCode code="delete_registry" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a registry. The registry must contain zero records before it can be deleted. This operation initiates the deletion process asynchronously.</td>
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
<tr id="parameter-registry_id">
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the registry to delete. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</td>
</tr>
<tr id="parameter-authorizerType">
    <td><CopyableCode code="authorizerType" /></td>
    <td><code>string</code></td>
    <td>Filter registries by their authorizer type. Possible values are CUSTOM_JWT and AWS_IAM. For more information about authorizer types, see the RegistryAuthorizerType enum.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter registries by their current status. Possible values include CREATING, READY, UPDATING, CREATE_FAILED, UPDATE_FAILED, DELETING, and DELETE_FAILED.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_registry"
    values={[
        { label: 'get_registry', value: 'get_registry' },
        { label: 'list_registries', value: 'list_registries' }
    ]}
>
<TabItem value="get_registry">

Retrieves information about a specific registry.

```sql
SELECT
name,
approval_configuration,
authorizer_configuration,
authorizer_type,
created_at,
description,
registry_arn,
registry_id,
status,
status_reason,
updated_at
FROM aws.bedrock_agentcore_control.registries
WHERE registry_id = '{{ registry_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_registries">

Lists all registries in the account. You can optionally filter results by status using the status parameter, or by authorizer type using the authorizerType parameter.

```sql
SELECT
name,
authorizer_type,
created_at,
description,
registry_arn,
registry_id,
status,
status_reason,
updated_at
FROM aws.bedrock_agentcore_control.registries
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND status = '{{ status }}'
AND authorizerType = '{{ authorizerType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_registry"
    values={[
        { label: 'create_registry', value: 'create_registry' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_registry">

Creates a new registry in your Amazon Web Services account. A registry serves as a centralized catalog for organizing and managing registry records, including MCP servers, A2A agents, agent skills, and custom resource types. If you specify CUSTOM_JWT as the authorizerType, you must provide an authorizerConfiguration.

```sql
INSERT INTO aws.bedrock_agentcore_control.registries (
name,
description,
authorizerType,
authorizerConfiguration,
clientToken,
approvalConfiguration,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ authorizerType }}',
'{{ authorizerConfiguration }}',
'{{ clientToken }}',
'{{ approvalConfiguration }}',
'{{ region }}'
RETURNING
registry_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: registries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the registries resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: authorizerType
      value: "{{ authorizerType }}"
      valid_values: ['CUSTOM_JWT', 'AWS_IAM']
    - name: authorizerConfiguration
      description: |
        Represents inbound authorization configuration options used to authenticate incoming requests.
      value:
        customJWTAuthorizer:
          discoveryUrl: "{{ discoveryUrl }}"
          allowedAudience:
            - "{{ allowedAudience }}"
          allowedClients:
            - "{{ allowedClients }}"
          allowedScopes:
            - "{{ allowedScopes }}"
          customClaims:
            - inboundTokenClaimName: "{{ inboundTokenClaimName }}"
              inboundTokenClaimValueType: "{{ inboundTokenClaimValueType }}"
              authorizingClaimMatchValue:
                claimMatchValue:
                  matchValueString: "{{ matchValueString }}"
                  matchValueStringList: "{{ matchValueStringList }}"
                claimMatchOperator: "{{ claimMatchOperator }}"
          privateEndpoint:
            selfManagedLatticeResource:
              resourceConfigurationIdentifier: "{{ resourceConfigurationIdentifier }}"
            managedVpcResource:
              vpcIdentifier: "{{ vpcIdentifier }}"
              subnetIds:
                - "{{ subnetIds }}"
              endpointIpAddressType: "{{ endpointIpAddressType }}"
              securityGroupIds:
                - "{{ securityGroupIds }}"
              tags: "{{ tags }}"
              routingDomain: "{{ routingDomain }}"
          privateEndpointOverrides:
            - domain: "{{ domain }}"
              privateEndpoint:
                selfManagedLatticeResource:
                  resourceConfigurationIdentifier: "{{ resourceConfigurationIdentifier }}"
                managedVpcResource:
                  vpcIdentifier: "{{ vpcIdentifier }}"
                  subnetIds: "{{ subnetIds }}"
                  endpointIpAddressType: "{{ endpointIpAddressType }}"
                  securityGroupIds: "{{ securityGroupIds }}"
                  tags: "{{ tags }}"
                  routingDomain: "{{ routingDomain }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: approvalConfiguration
      description: |
        Configuration for the registry record approval workflow. Controls whether records added to the registry require explicit approval before becoming active.
      value:
        autoApproval: {{ autoApproval }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_registry"
    values={[
        { label: 'update_registry', value: 'update_registry' }
    ]}
>
<TabItem value="update_registry">

Updates an existing registry. This operation uses PATCH semantics, so you only need to specify the fields you want to change.

```sql
UPDATE aws.bedrock_agentcore_control.registries
SET 
name = '{{ name }}',
description = '{{ description }}',
authorizerConfiguration = '{{ authorizerConfiguration }}',
approvalConfiguration = '{{ approvalConfiguration }}'
WHERE 
registry_id = '{{ registry_id }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
approval_configuration,
authorizer_configuration,
authorizer_type,
created_at,
description,
registry_arn,
registry_id,
status,
status_reason,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_registry"
    values={[
        { label: 'delete_registry', value: 'delete_registry' }
    ]}
>
<TabItem value="delete_registry">

Deletes a registry. The registry must contain zero records before it can be deleted. This operation initiates the deletion process asynchronously.

```sql
DELETE FROM aws.bedrock_agentcore_control.registries
WHERE registry_id = '{{ registry_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
