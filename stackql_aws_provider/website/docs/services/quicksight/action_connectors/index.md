--- 
title: action_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - action_connectors
  - quicksight
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

Creates, updates, deletes, gets or lists an <code>action_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="action_connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.action_connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_action_connector"
    values={[
        { label: 'describe_action_connector', value: 'describe_action_connector' },
        { label: 'search_action_connectors', value: 'search_action_connectors' },
        { label: 'list_action_connectors', value: 'list_action_connectors' }
    ]}
>
<TabItem value="describe_action_connector">

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
    <td><CopyableCode code="ActionConnector" /></td>
    <td><code>object</code></td>
    <td>The detailed information about the action connector, including its configuration and current state.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status code of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_action_connectors">

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
    <td><CopyableCode code="ActionConnectorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the action connector. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the action connector.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the action connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Error" /></td>
    <td><code>object</code></td>
    <td>Error information if the action connector is in an error state.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the action connector was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the action connector. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;(?:&#91;\w- &#93;*&#91;A-Za-z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the action connector. (CREATION_IN_PROGRESS, CREATION_SUCCESSFUL, CREATION_FAILED, UPDATE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of action connector (e.g., SALESFORCE, JIRA, CUSTOM, BEDROCK). (GENERIC_HTTP, SERVICENOW_NOW_PLATFORM, SALESFORCE_CRM, MICROSOFT_OUTLOOK, PAGERDUTY_ADVANCE, JIRA_CLOUD, ATLASSIAN_CONFLUENCE, AMAZON_S3, AMAZON_BEDROCK_AGENT_RUNTIME, AMAZON_BEDROCK_RUNTIME, AMAZON_BEDROCK_DATA_AUTOMATION_RUNTIME, AMAZON_TEXTRACT, AMAZON_COMPREHEND, AMAZON_COMPREHEND_MEDICAL, MICROSOFT_ONEDRIVE, MICROSOFT_SHAREPOINT, MICROSOFT_TEAMS, SAP_BUSINESSPARTNER, SAP_PRODUCTMASTERDATA, SAP_PHYSICALINVENTORY, SAP_BILLOFMATERIALS, SAP_MATERIALSTOCK, ZENDESK_SUITE, SMARTSHEET, SLACK, ASANA, BAMBOO_HR)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_action_connectors">

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
    <td><CopyableCode code="ActionConnectorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the action connector. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the action connector.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the action connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Error" /></td>
    <td><code>object</code></td>
    <td>Error information if the action connector is in an error state.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the action connector was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the action connector. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;(?:&#91;\w- &#93;*&#91;A-Za-z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the action connector. (CREATION_IN_PROGRESS, CREATION_SUCCESSFUL, CREATION_FAILED, UPDATE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of action connector (e.g., SALESFORCE, JIRA, CUSTOM, BEDROCK). (GENERIC_HTTP, SERVICENOW_NOW_PLATFORM, SALESFORCE_CRM, MICROSOFT_OUTLOOK, PAGERDUTY_ADVANCE, JIRA_CLOUD, ATLASSIAN_CONFLUENCE, AMAZON_S3, AMAZON_BEDROCK_AGENT_RUNTIME, AMAZON_BEDROCK_RUNTIME, AMAZON_BEDROCK_DATA_AUTOMATION_RUNTIME, AMAZON_TEXTRACT, AMAZON_COMPREHEND, AMAZON_COMPREHEND_MEDICAL, MICROSOFT_ONEDRIVE, MICROSOFT_SHAREPOINT, MICROSOFT_TEAMS, SAP_BUSINESSPARTNER, SAP_PRODUCTMASTERDATA, SAP_PHYSICALINVENTORY, SAP_BILLOFMATERIALS, SAP_MATERIALSTOCK, ZENDESK_SUITE, SMARTSHEET, SLACK, ASANA, BAMBOO_HR)</td>
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
    <td><a href="#describe_action_connector"><CopyableCode code="describe_action_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-action_connector_id"><code>action_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about an action connector, including its configuration, authentication settings, enabled actions, and current status.</td>
</tr>
<tr>
    <td><a href="#search_action_connectors"><CopyableCode code="search_action_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Searches for action connectors in the specified Amazon Web Services account using filters. You can search by connector name, type, or user permissions.</td>
</tr>
<tr>
    <td><a href="#list_action_connectors"><CopyableCode code="list_action_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists all action connectors in the specified Amazon Web Services account. Returns summary information for each connector including its name, type, creation time, and status.</td>
</tr>
<tr>
    <td><a href="#create_action_connector"><CopyableCode code="create_action_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ActionConnectorId"><code>ActionConnectorId</code></a>, <a href="#parameter-AuthenticationConfig"><code>AuthenticationConfig</code></a></td>
    <td></td>
    <td>Creates an action connector that enables Amazon Quick Sight to connect to external services and perform actions. Action connectors support various authentication methods and can be configured with specific actions from supported connector types like Amazon S3, Salesforce, JIRA.</td>
</tr>
<tr>
    <td><a href="#update_action_connector"><CopyableCode code="update_action_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-action_connector_id"><code>action_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AuthenticationConfig"><code>AuthenticationConfig</code></a></td>
    <td></td>
    <td>Updates an existing action connector with new configuration details, authentication settings, or enabled actions. You can modify the connector's name, description, authentication configuration, and which actions are enabled. For more information, https:​//docs.aws.amazon.com/quicksuite/latest/userguide/quick-action-auth.html.</td>
</tr>
<tr>
    <td><a href="#delete_action_connector"><CopyableCode code="delete_action_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-action_connector_id"><code>action_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Hard deletes an action connector, making it unrecoverable. This operation removes the connector and all its associated configurations. Any resources currently using this action connector will no longer be able to perform actions through it.</td>
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
<tr id="parameter-action_connector_id">
    <td><CopyableCode code="action_connector_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the action connector to delete.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that contains the action connector to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of action connectors to return in a single response. Valid range is 1 to 100.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>A pagination token to retrieve the next set of results. Use the token returned from a previous call to continue listing action connectors.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_action_connector"
    values={[
        { label: 'describe_action_connector', value: 'describe_action_connector' },
        { label: 'search_action_connectors', value: 'search_action_connectors' },
        { label: 'list_action_connectors', value: 'list_action_connectors' }
    ]}
>
<TabItem value="describe_action_connector">

Retrieves detailed information about an action connector, including its configuration, authentication settings, enabled actions, and current status.

```sql
SELECT
ActionConnector,
RequestId,
Status
FROM aws.quicksight.action_connectors
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND action_connector_id = '{{ action_connector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_action_connectors">

Searches for action connectors in the specified Amazon Web Services account using filters. You can search by connector name, type, or user permissions.

```sql
SELECT
ActionConnectorId,
Arn,
CreatedTime,
Error,
LastUpdatedTime,
Name,
Status,
Type
FROM aws.quicksight.action_connectors
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
<TabItem value="list_action_connectors">

Lists all action connectors in the specified Amazon Web Services account. Returns summary information for each connector including its name, type, creation time, and status.

```sql
SELECT
ActionConnectorId,
Arn,
CreatedTime,
Error,
LastUpdatedTime,
Name,
Status,
Type
FROM aws.quicksight.action_connectors
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_action_connector"
    values={[
        { label: 'create_action_connector', value: 'create_action_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_action_connector">

Creates an action connector that enables Amazon Quick Sight to connect to external services and perform actions. Action connectors support various authentication methods and can be configured with specific actions from supported connector types like Amazon S3, Salesforce, JIRA.

```sql
INSERT INTO aws.quicksight.action_connectors (
ActionConnectorId,
Name,
Type,
AuthenticationConfig,
Description,
Permissions,
VpcConnectionArn,
Tags,
aws_account_id,
region
)
SELECT 
'{{ ActionConnectorId }}' /* required */,
'{{ Name }}',
'{{ Type }}',
'{{ AuthenticationConfig }}' /* required */,
'{{ Description }}',
'{{ Permissions }}',
'{{ VpcConnectionArn }}',
'{{ Tags }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
ActionConnectorId,
Arn,
CreationStatus,
RequestId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: action_connectors
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the action_connectors resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the action_connectors resource.
    - name: ActionConnectorId
      value: "{{ ActionConnectorId }}"
    - name: Name
      value: "{{ Name }}"
    - name: Type
      value: "{{ Type }}"
      valid_values: ['GENERIC_HTTP', 'SERVICENOW_NOW_PLATFORM', 'SALESFORCE_CRM', 'MICROSOFT_OUTLOOK', 'PAGERDUTY_ADVANCE', 'JIRA_CLOUD', 'ATLASSIAN_CONFLUENCE', 'AMAZON_S3', 'AMAZON_BEDROCK_AGENT_RUNTIME', 'AMAZON_BEDROCK_RUNTIME', 'AMAZON_BEDROCK_DATA_AUTOMATION_RUNTIME', 'AMAZON_TEXTRACT', 'AMAZON_COMPREHEND', 'AMAZON_COMPREHEND_MEDICAL', 'MICROSOFT_ONEDRIVE', 'MICROSOFT_SHAREPOINT', 'MICROSOFT_TEAMS', 'SAP_BUSINESSPARTNER', 'SAP_PRODUCTMASTERDATA', 'SAP_PHYSICALINVENTORY', 'SAP_BILLOFMATERIALS', 'SAP_MATERIALSTOCK', 'ZENDESK_SUITE', 'SMARTSHEET', 'SLACK', 'ASANA', 'BAMBOO_HR']
    - name: AuthenticationConfig
      description: |
        Authentication configuration for connecting to external services.
      value:
        AuthenticationType: "{{ AuthenticationType }}"
        AuthenticationMetadata:
          AuthorizationCodeGrantMetadata:
            BaseEndpoint: "{{ BaseEndpoint }}"
            RedirectUrl: "{{ RedirectUrl }}"
            AuthorizationCodeGrantCredentialsSource: "{{ AuthorizationCodeGrantCredentialsSource }}"
            AuthorizationCodeGrantCredentialsDetails:
              AuthorizationCodeGrantDetails:
                ClientId: "{{ ClientId }}"
                ClientSecret: "{{ ClientSecret }}"
                TokenEndpoint: "{{ TokenEndpoint }}"
                AuthorizationEndpoint: "{{ AuthorizationEndpoint }}"
          ClientCredentialsGrantMetadata:
            BaseEndpoint: "{{ BaseEndpoint }}"
            ClientCredentialsSource: "{{ ClientCredentialsSource }}"
            ClientCredentialsDetails:
              ClientCredentialsGrantDetails:
                ClientId: "{{ ClientId }}"
                ClientSecret: "{{ ClientSecret }}"
                TokenEndpoint: "{{ TokenEndpoint }}"
          BasicAuthConnectionMetadata:
            BaseEndpoint: "{{ BaseEndpoint }}"
            Username: "{{ Username }}"
            Password: "{{ Password }}"
          ApiKeyConnectionMetadata:
            BaseEndpoint: "{{ BaseEndpoint }}"
            ApiKey: "{{ ApiKey }}"
            Email: "{{ Email }}"
          NoneConnectionMetadata:
            BaseEndpoint: "{{ BaseEndpoint }}"
          IamConnectionMetadata:
            RoleArn: "{{ RoleArn }}"
    - name: Description
      value: "{{ Description }}"
    - name: Permissions
      value:
        - Principal: "{{ Principal }}"
          Actions: "{{ Actions }}"
    - name: VpcConnectionArn
      value: "{{ VpcConnectionArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_action_connector"
    values={[
        { label: 'update_action_connector', value: 'update_action_connector' }
    ]}
>
<TabItem value="update_action_connector">

Updates an existing action connector with new configuration details, authentication settings, or enabled actions. You can modify the connector's name, description, authentication configuration, and which actions are enabled. For more information, https://docs.aws.amazon.com/quicksuite/latest/userguide/quick-action-auth.html.

```sql
UPDATE aws.quicksight.action_connectors
SET 
Name = '{{ Name }}',
AuthenticationConfig = '{{ AuthenticationConfig }}',
Description = '{{ Description }}',
VpcConnectionArn = '{{ VpcConnectionArn }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND action_connector_id = '{{ action_connector_id }}' --required
AND region = '{{ region }}' --required
AND AuthenticationConfig = '{{ AuthenticationConfig }}' --required
RETURNING
ActionConnectorId,
Arn,
RequestId,
Status,
UpdateStatus;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_action_connector"
    values={[
        { label: 'delete_action_connector', value: 'delete_action_connector' }
    ]}
>
<TabItem value="delete_action_connector">

Hard deletes an action connector, making it unrecoverable. This operation removes the connector and all its associated configurations. Any resources currently using this action connector will no longer be able to perform actions through it.

```sql
DELETE FROM aws.quicksight.action_connectors
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND action_connector_id = '{{ action_connector_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
