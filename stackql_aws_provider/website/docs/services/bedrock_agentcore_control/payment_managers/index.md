--- 
title: payment_managers
hide_title: false
hide_table_of_contents: false
keywords:
  - payment_managers
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

Creates, updates, deletes, gets or lists a <code>payment_managers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="payment_managers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.payment_managers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_payment_manager"
    values={[
        { label: 'get_payment_manager', value: 'get_payment_manager' },
        { label: 'list_payment_managers', value: 'list_payment_managers' }
    ]}
>
<TabItem value="get_payment_manager">

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
    <td>The name of the payment manager. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_configuration" /></td>
    <td><code>object</code></td>
    <td>Represents inbound authorization configuration options used to authenticate incoming requests.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_type" /></td>
    <td><code>string</code></td>
    <td>The type of authorizer used by the payment manager. CUSTOM_JWT - Authorize with a bearer token. AWS_IAM - Authorize with your Amazon Web Services IAM credentials. (CUSTOM_JWT, AWS_IAM)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the payment manager was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the payment manager. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt sensitive payment manager data at rest, if configured. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the payment manager was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="payment_manager_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the payment manager. (pattern: &lt;code&gt;arn:(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:payment-manager/(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,48&#125;-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_manager_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the payment manager. (pattern: &lt;code&gt;(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,100&#125;-&#91;0-9a-z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role associated with the payment manager. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the payment manager. Possible values include CREATING, READY, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED, and DELETE_FAILED. (CREATING, UPDATING, DELETING, READY, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the payment manager.</td>
</tr>
<tr>
    <td><CopyableCode code="workload_identity_details" /></td>
    <td><code>object</code></td>
    <td>The information about the workload identity.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_payment_managers">

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
    <td>The name of the payment manager. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_type" /></td>
    <td><code>string</code></td>
    <td>The type of authorizer used by the payment manager. CUSTOM_JWT - Authorize with a bearer token. AWS_IAM - Authorize with your Amazon Web Services IAM credentials. (CUSTOM_JWT, AWS_IAM)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the payment manager was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the payment manager. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt sensitive payment manager data at rest, if configured. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the payment manager was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="payment_manager_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the payment manager. (pattern: &lt;code&gt;arn:(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:payment-manager/(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,48&#125;-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_manager_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the payment manager. (pattern: &lt;code&gt;(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,100&#125;-&#91;0-9a-z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role associated with the payment manager. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the payment manager. Possible values include CREATING, READY, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED, and DELETE_FAILED. (CREATING, UPDATING, DELETING, READY, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
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
    <td><a href="#get_payment_manager"><CopyableCode code="get_payment_manager" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-payment_manager_id"><code>payment_manager_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific payment manager.</td>
</tr>
<tr>
    <td><a href="#list_payment_managers"><CopyableCode code="list_payment_managers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all payment managers in the account.</td>
</tr>
<tr>
    <td><a href="#create_payment_manager"><CopyableCode code="create_payment_manager" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-authorizerType"><code>authorizerType</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a new payment manager in your Amazon Web Services account. A payment manager serves as the top-level resource for managing payment processing capabilities, including payment connectors that integrate with supported payment providers. If you specify CUSTOM_JWT as the authorizerType, you must provide an authorizerConfiguration.</td>
</tr>
<tr>
    <td><a href="#update_payment_manager"><CopyableCode code="update_payment_manager" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-payment_manager_id"><code>payment_manager_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing payment manager. This operation uses PATCH semantics, so you only need to specify the fields you want to change.</td>
</tr>
<tr>
    <td><a href="#delete_payment_manager"><CopyableCode code="delete_payment_manager" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-payment_manager_id"><code>payment_manager_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a payment manager. All payment connectors associated with the payment manager must be deleted before the payment manager can be deleted. This operation initiates the deletion process asynchronously.</td>
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
<tr id="parameter-payment_manager_id">
    <td><CopyableCode code="payment_manager_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the payment manager to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see Ensuring idempotency.</td>
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
    defaultValue="get_payment_manager"
    values={[
        { label: 'get_payment_manager', value: 'get_payment_manager' },
        { label: 'list_payment_managers', value: 'list_payment_managers' }
    ]}
>
<TabItem value="get_payment_manager">

Retrieves information about a specific payment manager.

```sql
SELECT
name,
authorizer_configuration,
authorizer_type,
created_at,
description,
kms_key_arn,
last_updated_at,
payment_manager_arn,
payment_manager_id,
role_arn,
status,
tags,
workload_identity_details
FROM aws.bedrock_agentcore_control.payment_managers
WHERE payment_manager_id = '{{ payment_manager_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_payment_managers">

Lists all payment managers in the account.

```sql
SELECT
name,
authorizer_type,
created_at,
description,
kms_key_arn,
last_updated_at,
payment_manager_arn,
payment_manager_id,
role_arn,
status
FROM aws.bedrock_agentcore_control.payment_managers
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_payment_manager"
    values={[
        { label: 'create_payment_manager', value: 'create_payment_manager' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_payment_manager">

Creates a new payment manager in your Amazon Web Services account. A payment manager serves as the top-level resource for managing payment processing capabilities, including payment connectors that integrate with supported payment providers. If you specify CUSTOM_JWT as the authorizerType, you must provide an authorizerConfiguration.

```sql
INSERT INTO aws.bedrock_agentcore_control.payment_managers (
name,
description,
authorizerType,
authorizerConfiguration,
roleArn,
clientToken,
tags,
kmsKeyArn,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ authorizerType }}' /* required */,
'{{ authorizerConfiguration }}',
'{{ roleArn }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ kmsKeyArn }}',
'{{ region }}'
RETURNING
name,
authorizer_configuration,
authorizer_type,
created_at,
kms_key_arn,
payment_manager_arn,
payment_manager_id,
role_arn,
status,
tags,
workload_identity_details
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: payment_managers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the payment_managers resource.
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
          advertisedScopeMapping: "{{ advertisedScopeMapping }}"
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
          allowedWorkloadConfiguration:
            hostingEnvironments:
              - arn: "{{ arn }}"
            workloadIdentities:
              - "{{ workloadIdentities }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_payment_manager"
    values={[
        { label: 'update_payment_manager', value: 'update_payment_manager' }
    ]}
>
<TabItem value="update_payment_manager">

Updates an existing payment manager. This operation uses PATCH semantics, so you only need to specify the fields you want to change.

```sql
UPDATE aws.bedrock_agentcore_control.payment_managers
SET 
description = '{{ description }}',
authorizerType = '{{ authorizerType }}',
authorizerConfiguration = '{{ authorizerConfiguration }}',
roleArn = '{{ roleArn }}',
clientToken = '{{ clientToken }}',
kmsKeyArn = '{{ kmsKeyArn }}'
WHERE 
payment_manager_id = '{{ payment_manager_id }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
authorizer_type,
kms_key_arn,
last_updated_at,
payment_manager_arn,
payment_manager_id,
role_arn,
status,
workload_identity_details;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_payment_manager"
    values={[
        { label: 'delete_payment_manager', value: 'delete_payment_manager' }
    ]}
>
<TabItem value="delete_payment_manager">

Deletes a payment manager. All payment connectors associated with the payment manager must be deleted before the payment manager can be deleted. This operation initiates the deletion process asynchronously.

```sql
DELETE FROM aws.bedrock_agentcore_control.payment_managers
WHERE payment_manager_id = '{{ payment_manager_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
