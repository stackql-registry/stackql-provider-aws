--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - devops_agent
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

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
    <td><CopyableCode code="service" /></td>
    <td><code>object</code></td>
    <td>Represents a registered service with its configuration and accessible resources.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the Service.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_services">

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
    <td>The display name of the registered service. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125;\p&#123;P&#125;\p&#123;S&#125;\p&#123;Z&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="accessible_resources" /></td>
    <td><code>array</code></td>
    <td>List of accessible resources for this service.</td>
</tr>
<tr>
    <td><CopyableCode code="additional_service_details" /></td>
    <td><code>object</code></td>
    <td>Additional details specific to the service type.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:kms:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="private_connection_name" /></td>
    <td><code>string</code></td>
    <td>Unique name for a Private Connection within an account. (pattern: &lt;code&gt;&#91;a-z0-9&#93;(&#91;a-z0-9-&#93;*&#91;a-z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for a registered service (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>The service type e.g github or dynatrace (github, slack, azure, azuredevops, dynatrace, servicenow, pagerduty, gitlab, eventChannel, mcpservernewrelic, mcpservergrafana, mcpserverdatadog, mcpserver, mcpserversplunk, azureidentity)</td>
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
    <td><a href="#get_service"><CopyableCode code="get_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves given service by it's unique identifier</td>
</tr>
<tr>
    <td><a href="#list_services"><CopyableCode code="list_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-filterServiceType"><code>filterServiceType</code></a></td>
    <td>List a list of registered service on the account level.</td>
</tr>
<tr>
    <td><a href="#register_service"><CopyableCode code="register_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service"><code>service</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceDetails"><code>serviceDetails</code></a></td>
    <td></td>
    <td>This operation registers the specified service</td>
</tr>
<tr>
    <td><a href="#associate_service"><CopyableCode code="associate_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Adds a specific service association to an AgentSpace. It overwrites the existing association of the same service. Returns 201 Created on success.</td>
</tr>
<tr>
    <td><a href="#disassociate_service"><CopyableCode code="disassociate_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specific service association from an AgentSpace. This operation is idempotent and returns a 204 No Content response on success.</td>
</tr>
<tr>
    <td><a href="#deregister_service"><CopyableCode code="deregister_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregister a service</td>
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
<tr id="parameter-agent_space_id">
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AgentSpace</td>
</tr>
<tr id="parameter-association_id">
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the given association.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The service id to deregister. A service can only be deregistered if it is not associated with any AgentSpace.</td>
</tr>
<tr id="parameter-filterServiceType">
    <td><CopyableCode code="filterServiceType" /></td>
    <td><code>string</code></td>
    <td>Optional filter to list only services of a specific type.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

Retrieves given service by it's unique identifier

```sql
SELECT
service,
tags
FROM aws.devops_agent.services
WHERE service_id = '{{ service_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_services">

List a list of registered service on the account level.

```sql
SELECT
name,
accessible_resources,
additional_service_details,
kms_key_arn,
private_connection_name,
service_id,
service_type
FROM aws.devops_agent.services
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND filterServiceType = '{{ filterServiceType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_service"
    values={[
        { label: 'register_service', value: 'register_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_service">

This operation registers the specified service

```sql
INSERT INTO aws.devops_agent.services (
serviceDetails,
kmsKeyArn,
privateConnectionName,
name,
tags,
service,
region
)
SELECT 
'{{ serviceDetails }}' /* required */,
'{{ kmsKeyArn }}',
'{{ privateConnectionName }}',
'{{ name }}',
'{{ tags }}',
'{{ service }}',
'{{ region }}'
RETURNING
additional_step,
kms_key_arn,
service_id,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: services
  props:
    - name: service
      value: "{{ service }}"
      description: Required parameter for the services resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the services resource.
    - name: serviceDetails
      description: |
        Union of service-specific configuration details for service registration.
      value:
        dynatrace:
          accountUrn: "{{ accountUrn }}"
          authorizationConfig:
            oAuthClientCredentials:
              clientName: "{{ clientName }}"
              clientId: "{{ clientId }}"
              exchangeParameters: "{{ exchangeParameters }}"
              clientSecret: "{{ clientSecret }}"
        servicenow:
          instanceUrl: "{{ instanceUrl }}"
          authorizationConfig:
            oAuthClientCredentials:
              clientName: "{{ clientName }}"
              clientId: "{{ clientId }}"
              exchangeParameters: "{{ exchangeParameters }}"
              clientSecret: "{{ clientSecret }}"
        mcpserverdatadog:
          name: "{{ name }}"
          endpoint: "{{ endpoint }}"
          description: "{{ description }}"
          authorizationConfig:
            authorizationDiscovery:
              returnToEndpoint: "{{ returnToEndpoint }}"
        mcpserver:
          name: "{{ name }}"
          endpoint: "{{ endpoint }}"
          description: "{{ description }}"
          authorizationConfig:
            oAuthClientCredentials:
              clientName: "{{ clientName }}"
              clientId: "{{ clientId }}"
              exchangeParameters: "{{ exchangeParameters }}"
              clientSecret: "{{ clientSecret }}"
              exchangeUrl: "{{ exchangeUrl }}"
              scopes:
                - "{{ scopes }}"
            oAuth3LO:
              clientName: "{{ clientName }}"
              clientId: "{{ clientId }}"
              exchangeParameters: "{{ exchangeParameters }}"
              returnToEndpoint: "{{ returnToEndpoint }}"
              authorizationUrl: "{{ authorizationUrl }}"
              exchangeUrl: "{{ exchangeUrl }}"
              clientSecret: "{{ clientSecret }}"
              supportCodeChallenge: {{ supportCodeChallenge }}
              scopes:
                - "{{ scopes }}"
            apiKey:
              apiKeyName: "{{ apiKeyName }}"
              apiKeyValue: "{{ apiKeyValue }}"
              apiKeyHeader: "{{ apiKeyHeader }}"
            bearerToken:
              tokenName: "{{ tokenName }}"
              tokenValue: "{{ tokenValue }}"
              authorizationHeader: "{{ authorizationHeader }}"
            authorizationDiscovery:
              returnToEndpoint: "{{ returnToEndpoint }}"
        gitlab:
          targetUrl: "{{ targetUrl }}"
          tokenType: "{{ tokenType }}"
          tokenValue: "{{ tokenValue }}"
          groupId: "{{ groupId }}"
        mcpserversplunk:
          name: "{{ name }}"
          endpoint: "{{ endpoint }}"
          description: "{{ description }}"
          authorizationConfig:
            oAuthClientCredentials:
              clientName: "{{ clientName }}"
              clientId: "{{ clientId }}"
              exchangeParameters: "{{ exchangeParameters }}"
              clientSecret: "{{ clientSecret }}"
              exchangeUrl: "{{ exchangeUrl }}"
              scopes:
                - "{{ scopes }}"
            oAuth3LO:
              clientName: "{{ clientName }}"
              clientId: "{{ clientId }}"
              exchangeParameters: "{{ exchangeParameters }}"
              returnToEndpoint: "{{ returnToEndpoint }}"
              authorizationUrl: "{{ authorizationUrl }}"
              exchangeUrl: "{{ exchangeUrl }}"
              clientSecret: "{{ clientSecret }}"
              supportCodeChallenge: {{ supportCodeChallenge }}
              scopes:
                - "{{ scopes }}"
            apiKey:
              apiKeyName: "{{ apiKeyName }}"
              apiKeyValue: "{{ apiKeyValue }}"
              apiKeyHeader: "{{ apiKeyHeader }}"
            bearerToken:
              tokenName: "{{ tokenName }}"
              tokenValue: "{{ tokenValue }}"
              authorizationHeader: "{{ authorizationHeader }}"
            authorizationDiscovery:
              returnToEndpoint: "{{ returnToEndpoint }}"
        mcpservernewrelic:
          authorizationConfig:
            apiKey:
              apiKey: "{{ apiKey }}"
              accountId: "{{ accountId }}"
              region: "{{ region }}"
              applicationIds:
                - "{{ applicationIds }}"
              entityGuids:
                - "{{ entityGuids }}"
              alertPolicyIds:
                - "{{ alertPolicyIds }}"
        eventChannel:
          type_: "{{ type_ }}"
        mcpservergrafana:
          name: "{{ name }}"
          endpoint: "{{ endpoint }}"
          description: "{{ description }}"
          authorizationConfig:
            oAuthClientCredentials:
              clientName: "{{ clientName }}"
              clientId: "{{ clientId }}"
              exchangeParameters: "{{ exchangeParameters }}"
              clientSecret: "{{ clientSecret }}"
              exchangeUrl: "{{ exchangeUrl }}"
              scopes:
                - "{{ scopes }}"
            oAuth3LO:
              clientName: "{{ clientName }}"
              clientId: "{{ clientId }}"
              exchangeParameters: "{{ exchangeParameters }}"
              returnToEndpoint: "{{ returnToEndpoint }}"
              authorizationUrl: "{{ authorizationUrl }}"
              exchangeUrl: "{{ exchangeUrl }}"
              clientSecret: "{{ clientSecret }}"
              supportCodeChallenge: {{ supportCodeChallenge }}
              scopes:
                - "{{ scopes }}"
            apiKey:
              apiKeyName: "{{ apiKeyName }}"
              apiKeyValue: "{{ apiKeyValue }}"
              apiKeyHeader: "{{ apiKeyHeader }}"
            bearerToken:
              tokenName: "{{ tokenName }}"
              tokenValue: "{{ tokenValue }}"
              authorizationHeader: "{{ authorizationHeader }}"
            authorizationDiscovery:
              returnToEndpoint: "{{ returnToEndpoint }}"
        pagerduty:
          scopes:
            - "{{ scopes }}"
          authorizationConfig:
            oAuthClientCredentials:
              clientName: "{{ clientName }}"
              clientId: "{{ clientId }}"
              exchangeParameters: "{{ exchangeParameters }}"
              clientSecret: "{{ clientSecret }}"
        azureidentity:
          tenantId: "{{ tenantId }}"
          clientId: "{{ clientId }}"
          webIdentityRoleArn: "{{ webIdentityRoleArn }}"
          webIdentityTokenAudiences:
            - "{{ webIdentityTokenAudiences }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
      description: |
        The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.
    - name: privateConnectionName
      value: "{{ privateConnectionName }}"
      description: |
        Unique name for a Private Connection within an account.
    - name: name
      value: "{{ name }}"
      description: |
        The display name for a registered service.
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tag keys to values.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_service"
    values={[
        { label: 'associate_service', value: 'associate_service' },
        { label: 'disassociate_service', value: 'disassociate_service' }
    ]}
>
<TabItem value="associate_service">

Adds a specific service association to an AgentSpace. It overwrites the existing association of the same service. Returns 201 Created on success.

```sql
UPDATE aws.devops_agent.services
SET 
serviceId = '{{ serviceId }}',
configuration = '{{ configuration }}'
WHERE 
agent_space_id = '{{ agent_space_id }}' --required
AND region = '{{ region }}' --required
AND serviceId = '{{ serviceId }}' --required
AND configuration = '{{ configuration }}' --required
RETURNING
association,
webhook;
```
</TabItem>
<TabItem value="disassociate_service">

Deletes a specific service association from an AgentSpace. This operation is idempotent and returns a 204 No Content response on success.

```sql
UPDATE aws.devops_agent.services
SET 
-- No updatable properties
WHERE 
agent_space_id = '{{ agent_space_id }}' --required
AND association_id = '{{ association_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_service"
    values={[
        { label: 'deregister_service', value: 'deregister_service' }
    ]}
>
<TabItem value="deregister_service">

Deregister a service

```sql
DELETE FROM aws.devops_agent.services
WHERE service_id = '{{ service_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
