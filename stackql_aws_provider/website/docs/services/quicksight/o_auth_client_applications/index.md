--- 
title: o_auth_client_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - o_auth_client_applications
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

Creates, updates, deletes, gets or lists an <code>o_auth_client_applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="o_auth_client_applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.o_auth_client_applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_o_auth_client_application"
    values={[
        { label: 'describe_o_auth_client_application', value: 'describe_o_auth_client_application' },
        { label: 'list_o_auth_client_applications', value: 'list_o_auth_client_applications' }
    ]}
>
<TabItem value="describe_o_auth_client_application">

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
    <td><CopyableCode code="o_auth_client_application" /></td>
    <td><code>object</code></td>
    <td>The information about the OAuthClientApplication.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_o_auth_client_applications">

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
    <td>The Amazon Resource Name (ARN) of the OAuthClientApplication.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the OAuthClientApplication was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_type" /></td>
    <td><code>string</code></td>
    <td>The type of data source that the OAuthClientApplication is used with. Valid values are SNOWFLAKE. (ADOBE_ANALYTICS, AMAZON_ELASTICSEARCH, ATHENA, AURORA, AURORA_POSTGRESQL, AWS_IOT_ANALYTICS, GITHUB, JIRA, MARIADB, MYSQL, ORACLE, POSTGRESQL, PRESTO, REDSHIFT, S3, S3_TABLES, SALESFORCE, SERVICENOW, SNOWFLAKE, SPARK, SQLSERVER, TERADATA, TWITTER, TIMESTREAM, AMAZON_OPENSEARCH, EXASOL, DATABRICKS, STARBURST, TRINO, BIGQUERY, GOOGLESHEETS, GOOGLE_DRIVE, CONFLUENCE, SHAREPOINT, ONE_DRIVE, WEB_CRAWLER, S3_KNOWLEDGE_BASE, QBUSINESS)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_vpc_connection_properties" /></td>
    <td><code>object</code></td>
    <td>VPC connection properties.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the OAuthClientApplication was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the OAuthClientApplication.</td>
</tr>
<tr>
    <td><CopyableCode code="o_auth_client_application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the OAuthClientApplication. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. (pattern: &lt;code&gt;&#91;^/&#93;&#91;^\p&#123;Cc&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="o_auth_client_authentication_type" /></td>
    <td><code>string</code></td>
    <td>The OAuth client authentication type used by the OAuthClientApplication. Valid values are TOKEN. (TOKEN)</td>
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
    <td><a href="#describe_o_auth_client_application"><CopyableCode code="describe_o_auth_client_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-o_auth_client_application_id"><code>o_auth_client_application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an OAuthClientApplication.</td>
</tr>
<tr>
    <td><a href="#list_o_auth_client_applications"><CopyableCode code="list_o_auth_client_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all OAuthClientApplications in the current Amazon Web Services Region that belong to this Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_o_auth_client_application"><CopyableCode code="create_o_auth_client_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OAuthClientApplicationId"><code>OAuthClientApplicationId</code></a>, <a href="#parameter-OAuthClientAuthenticationType"><code>OAuthClientAuthenticationType</code></a>, <a href="#parameter-ClientId"><code>ClientId</code></a>, <a href="#parameter-ClientSecret"><code>ClientSecret</code></a>, <a href="#parameter-OAuthTokenEndpointUrl"><code>OAuthTokenEndpointUrl</code></a></td>
    <td></td>
    <td>Creates an OAuthClientApplication.</td>
</tr>
<tr>
    <td><a href="#update_o_auth_client_application"><CopyableCode code="update_o_auth_client_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-o_auth_client_application_id"><code>o_auth_client_application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an OAuthClientApplication.</td>
</tr>
<tr>
    <td><a href="#delete_o_auth_client_application"><CopyableCode code="delete_o_auth_client_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-o_auth_client_application_id"><code>o_auth_client_application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an OAuthClientApplication.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID.</td>
</tr>
<tr id="parameter-o_auth_client_application_id">
    <td><CopyableCode code="o_auth_client_application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the OAuthClientApplication that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>A pagination token that can be used in a subsequent request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_o_auth_client_application"
    values={[
        { label: 'describe_o_auth_client_application', value: 'describe_o_auth_client_application' },
        { label: 'list_o_auth_client_applications', value: 'list_o_auth_client_applications' }
    ]}
>
<TabItem value="describe_o_auth_client_application">

Describes an OAuthClientApplication.

```sql
SELECT
o_auth_client_application,
request_id,
status
FROM aws.quicksight.o_auth_client_applications
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND o_auth_client_application_id = '{{ o_auth_client_application_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_o_auth_client_applications">

Lists all OAuthClientApplications in the current Amazon Web Services Region that belong to this Amazon Web Services account.

```sql
SELECT
arn,
created_time,
data_source_type,
identity_provider_vpc_connection_properties,
last_updated_time,
name,
o_auth_client_application_id,
o_auth_client_authentication_type
FROM aws.quicksight.o_auth_client_applications
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_o_auth_client_application"
    values={[
        { label: 'create_o_auth_client_application', value: 'create_o_auth_client_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_o_auth_client_application">

Creates an OAuthClientApplication.

```sql
INSERT INTO aws.quicksight.o_auth_client_applications (
OAuthClientApplicationId,
Name,
OAuthClientAuthenticationType,
ClientId,
ClientSecret,
OAuthTokenEndpointUrl,
OAuthAuthorizationEndpointUrl,
OAuthScopes,
DataSourceType,
IdentityProviderVpcConnectionProperties,
Tags,
aws_account_id,
region
)
SELECT 
'{{ OAuthClientApplicationId }}' /* required */,
'{{ Name }}',
'{{ OAuthClientAuthenticationType }}' /* required */,
'{{ ClientId }}' /* required */,
'{{ ClientSecret }}' /* required */,
'{{ OAuthTokenEndpointUrl }}' /* required */,
'{{ OAuthAuthorizationEndpointUrl }}',
'{{ OAuthScopes }}',
'{{ DataSourceType }}',
'{{ IdentityProviderVpcConnectionProperties }}',
'{{ Tags }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
arn,
creation_status,
o_auth_client_application_id,
request_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: o_auth_client_applications
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the o_auth_client_applications resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the o_auth_client_applications resource.
    - name: OAuthClientApplicationId
      value: "{{ OAuthClientApplicationId }}"
    - name: Name
      value: "{{ Name }}"
    - name: OAuthClientAuthenticationType
      value: "{{ OAuthClientAuthenticationType }}"
      valid_values: ['TOKEN']
    - name: ClientId
      value: "{{ ClientId }}"
    - name: ClientSecret
      value: "{{ ClientSecret }}"
    - name: OAuthTokenEndpointUrl
      value: "{{ OAuthTokenEndpointUrl }}"
    - name: OAuthAuthorizationEndpointUrl
      value: "{{ OAuthAuthorizationEndpointUrl }}"
    - name: OAuthScopes
      value: "{{ OAuthScopes }}"
    - name: DataSourceType
      value: "{{ DataSourceType }}"
      valid_values: ['ADOBE_ANALYTICS', 'AMAZON_ELASTICSEARCH', 'ATHENA', 'AURORA', 'AURORA_POSTGRESQL', 'AWS_IOT_ANALYTICS', 'GITHUB', 'JIRA', 'MARIADB', 'MYSQL', 'ORACLE', 'POSTGRESQL', 'PRESTO', 'REDSHIFT', 'S3', 'S3_TABLES', 'SALESFORCE', 'SERVICENOW', 'SNOWFLAKE', 'SPARK', 'SQLSERVER', 'TERADATA', 'TWITTER', 'TIMESTREAM', 'AMAZON_OPENSEARCH', 'EXASOL', 'DATABRICKS', 'STARBURST', 'TRINO', 'BIGQUERY', 'GOOGLESHEETS', 'GOOGLE_DRIVE', 'CONFLUENCE', 'SHAREPOINT', 'ONE_DRIVE', 'WEB_CRAWLER', 'S3_KNOWLEDGE_BASE', 'QBUSINESS']
    - name: IdentityProviderVpcConnectionProperties
      description: |
        VPC connection properties.
      value:
        VpcConnectionArn: "{{ VpcConnectionArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_o_auth_client_application"
    values={[
        { label: 'update_o_auth_client_application', value: 'update_o_auth_client_application' }
    ]}
>
<TabItem value="update_o_auth_client_application">

Updates an OAuthClientApplication.

```sql
UPDATE aws.quicksight.o_auth_client_applications
SET 
Name = '{{ Name }}',
ClientId = '{{ ClientId }}',
ClientSecret = '{{ ClientSecret }}',
OAuthTokenEndpointUrl = '{{ OAuthTokenEndpointUrl }}',
OAuthAuthorizationEndpointUrl = '{{ OAuthAuthorizationEndpointUrl }}',
OAuthScopes = '{{ OAuthScopes }}',
DataSourceType = '{{ DataSourceType }}',
IdentityProviderVpcConnectionProperties = '{{ IdentityProviderVpcConnectionProperties }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND o_auth_client_application_id = '{{ o_auth_client_application_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
o_auth_client_application_id,
request_id,
status,
update_status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_o_auth_client_application"
    values={[
        { label: 'delete_o_auth_client_application', value: 'delete_o_auth_client_application' }
    ]}
>
<TabItem value="delete_o_auth_client_application">

Deletes an OAuthClientApplication.

```sql
DELETE FROM aws.quicksight.o_auth_client_applications
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND o_auth_client_application_id = '{{ o_auth_client_application_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
