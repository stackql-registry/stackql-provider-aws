--- 
title: gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - gateways
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

Creates, updates, deletes, gets or lists a <code>gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_gateway"
    values={[
        { label: 'get_gateway', value: 'get_gateway' },
        { label: 'list_gateways', value: 'list_gateways' }
    ]}
>
<TabItem value="get_gateway">

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
    <td>The name of the gateway. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_configuration" /></td>
    <td><code>object</code></td>
    <td>Represents inbound authorization configuration options used to authenticate incoming requests.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_type" /></td>
    <td><code>string</code></td>
    <td>Authorizer type for the gateway. (CUSTOM_JWT, AWS_IAM, NONE, AUTHENTICATE_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the gateway was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="exception_level" /></td>
    <td><code>string</code></td>
    <td>The level of detail in error messages returned when invoking the gateway. If the value is DEBUG, granular exception messages are returned to help a user debug the gateway. If the value is omitted, a generic error message is returned to the end user. (DEBUG)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):bedrock-agentcore:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:gateway/(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,48&#125;-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway. (pattern: &lt;code&gt;(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,100&#125;-&#91;0-9a-z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_url" /></td>
    <td><code>string</code></td>
    <td>An endpoint for invoking gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="interceptor_configurations" /></td>
    <td><code>array</code></td>
    <td>The interceptors configured on the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the gateway. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_engine_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for a policy engine associated with a gateway. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with a gateway, the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for a gateway protocol. This structure defines how the gateway communicates with external services.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol_type" /></td>
    <td><code>string</code></td>
    <td>Protocol applied to a gateway. (MCP)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN that provides permissions for the gateway. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the gateway. (CREATING, UPDATING, UPDATE_UNSUCCESSFUL, DELETING, READY, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reasons" /></td>
    <td><code>array</code></td>
    <td>The reasons for the current status of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the gateway was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workload_identity_details" /></td>
    <td><code>object</code></td>
    <td>The information about the workload identity.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_gateways">

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
    <td>The name of the gateway. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_type" /></td>
    <td><code>string</code></td>
    <td>The type of authorizer used by the gateway. (CUSTOM_JWT, AWS_IAM, NONE, AUTHENTICATE_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the gateway was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway. (pattern: &lt;code&gt;(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,100&#125;-&#91;0-9a-z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol_type" /></td>
    <td><code>string</code></td>
    <td>The protocol type used by the gateway. (MCP)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the gateway. (CREATING, UPDATING, UPDATE_UNSUCCESSFUL, DELETING, READY, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the gateway was last updated.</td>
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
    <td><a href="#get_gateway"><CopyableCode code="get_gateway" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific Gateway.</td>
</tr>
<tr>
    <td><a href="#list_gateways"><CopyableCode code="list_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all gateways in the account.</td>
</tr>
<tr>
    <td><a href="#create_gateway"><CopyableCode code="create_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-authorizerType"><code>authorizerType</code></a></td>
    <td></td>
    <td>Creates a gateway for Amazon Bedrock Agent. A gateway serves as an integration point between your agent and external services. If you specify CUSTOM_JWT as the authorizerType, you must provide an authorizerConfiguration.</td>
</tr>
<tr>
    <td><a href="#update_gateway"><CopyableCode code="update_gateway" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-authorizerType"><code>authorizerType</code></a></td>
    <td></td>
    <td>Updates an existing gateway.</td>
</tr>
<tr>
    <td><a href="#delete_gateway"><CopyableCode code="delete_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a gateway.</td>
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
<tr id="parameter-gateway_identifier">
    <td><CopyableCode code="gateway_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the gateway to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_gateway"
    values={[
        { label: 'get_gateway', value: 'get_gateway' },
        { label: 'list_gateways', value: 'list_gateways' }
    ]}
>
<TabItem value="get_gateway">

Retrieves information about a specific Gateway.

```sql
SELECT
name,
authorizer_configuration,
authorizer_type,
created_at,
description,
exception_level,
gateway_arn,
gateway_id,
gateway_url,
interceptor_configurations,
kms_key_arn,
policy_engine_configuration,
protocol_configuration,
protocol_type,
role_arn,
status,
status_reasons,
updated_at,
workload_identity_details
FROM aws.bedrock_agentcore_control.gateways
WHERE gateway_identifier = '{{ gateway_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_gateways">

Lists all gateways in the account.

```sql
SELECT
name,
authorizer_type,
created_at,
description,
gateway_id,
protocol_type,
status,
updated_at
FROM aws.bedrock_agentcore_control.gateways
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_gateway"
    values={[
        { label: 'create_gateway', value: 'create_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_gateway">

Creates a gateway for Amazon Bedrock Agent. A gateway serves as an integration point between your agent and external services. If you specify CUSTOM_JWT as the authorizerType, you must provide an authorizerConfiguration.

```sql
INSERT INTO aws.bedrock_agentcore_control.gateways (
name,
description,
clientToken,
roleArn,
protocolType,
protocolConfiguration,
authorizerType,
authorizerConfiguration,
kmsKeyArn,
interceptorConfigurations,
policyEngineConfiguration,
exceptionLevel,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ clientToken }}',
'{{ roleArn }}' /* required */,
'{{ protocolType }}',
'{{ protocolConfiguration }}',
'{{ authorizerType }}' /* required */,
'{{ authorizerConfiguration }}',
'{{ kmsKeyArn }}',
'{{ interceptorConfigurations }}',
'{{ policyEngineConfiguration }}',
'{{ exceptionLevel }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
authorizer_configuration,
authorizer_type,
created_at,
description,
exception_level,
gateway_arn,
gateway_id,
gateway_url,
interceptor_configurations,
kms_key_arn,
policy_engine_configuration,
protocol_configuration,
protocol_type,
role_arn,
status,
status_reasons,
updated_at,
workload_identity_details
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the gateways resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: protocolType
      value: "{{ protocolType }}"
      valid_values: ['MCP']
    - name: protocolConfiguration
      description: |
        The configuration for a gateway protocol. This structure defines how the gateway communicates with external services.
      value:
        mcp:
          supportedVersions:
            - "{{ supportedVersions }}"
          instructions: "{{ instructions }}"
          searchType: "{{ searchType }}"
          sessionConfiguration:
            sessionTimeoutInSeconds: {{ sessionTimeoutInSeconds }}
          streamingConfiguration:
            enableResponseStreaming: {{ enableResponseStreaming }}
    - name: authorizerType
      value: "{{ authorizerType }}"
      valid_values: ['CUSTOM_JWT', 'AWS_IAM', 'NONE', 'AUTHENTICATE_ONLY']
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
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
    - name: interceptorConfigurations
      value:
        - interceptor:
            lambda:
              arn: "{{ arn }}"
          interceptionPoints: "{{ interceptionPoints }}"
          inputConfiguration:
            passRequestHeaders: {{ passRequestHeaders }}
    - name: policyEngineConfiguration
      description: |
        The configuration for a policy engine associated with a gateway. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with a gateway, the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies.
      value:
        arn: "{{ arn }}"
        mode: "{{ mode }}"
    - name: exceptionLevel
      value: "{{ exceptionLevel }}"
      valid_values: ['DEBUG']
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_gateway"
    values={[
        { label: 'update_gateway', value: 'update_gateway' }
    ]}
>
<TabItem value="update_gateway">

Updates an existing gateway.

```sql
UPDATE aws.bedrock_agentcore_control.gateways
SET 
name = '{{ name }}',
description = '{{ description }}',
roleArn = '{{ roleArn }}',
protocolType = '{{ protocolType }}',
protocolConfiguration = '{{ protocolConfiguration }}',
authorizerType = '{{ authorizerType }}',
authorizerConfiguration = '{{ authorizerConfiguration }}',
kmsKeyArn = '{{ kmsKeyArn }}',
interceptorConfigurations = '{{ interceptorConfigurations }}',
policyEngineConfiguration = '{{ policyEngineConfiguration }}',
exceptionLevel = '{{ exceptionLevel }}'
WHERE 
gateway_identifier = '{{ gateway_identifier }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND roleArn = '{{ roleArn }}' --required
AND authorizerType = '{{ authorizerType }}' --required
RETURNING
name,
authorizer_configuration,
authorizer_type,
created_at,
description,
exception_level,
gateway_arn,
gateway_id,
gateway_url,
interceptor_configurations,
kms_key_arn,
policy_engine_configuration,
protocol_configuration,
protocol_type,
role_arn,
status,
status_reasons,
updated_at,
workload_identity_details;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gateway"
    values={[
        { label: 'delete_gateway', value: 'delete_gateway' }
    ]}
>
<TabItem value="delete_gateway">

Deletes a gateway.

```sql
DELETE FROM aws.bedrock_agentcore_control.gateways
WHERE gateway_identifier = '{{ gateway_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
