--- 
title: connector_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_profiles
  - appflow
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

Creates, updates, deletes, gets or lists a <code>connector_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connector_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appflow.connector_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connector_profiles"
    values={[
        { label: 'describe_connector_profiles', value: 'describe_connector_profiles' }
    ]}
>
<TabItem value="describe_connector_profiles">

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
    <td><CopyableCode code="connectorProfileDetails" /></td>
    <td><code>array</code></td>
    <td>Returns information about the connector profiles associated with the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token for the next page of data. If nextToken=null, this means that all records have been fetched. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
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
    <td><a href="#describe_connector_profiles"><CopyableCode code="describe_connector_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of connector-profile details matching the provided connector-profile names and connector-types. Both input lists are optional, and you can use them to filter the result. If no names or connector-types are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</td>
</tr>
<tr>
    <td><a href="#create_connector_profile"><CopyableCode code="create_connector_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectorProfileName"><code>connectorProfileName</code></a>, <a href="#parameter-connectorType"><code>connectorType</code></a>, <a href="#parameter-connectionMode"><code>connectionMode</code></a>, <a href="#parameter-connectorProfileConfig"><code>connectorProfileConfig</code></a></td>
    <td></td>
    <td>Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.</td>
</tr>
<tr>
    <td><a href="#update_connector_profile"><CopyableCode code="update_connector_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectorProfileName"><code>connectorProfileName</code></a>, <a href="#parameter-connectionMode"><code>connectionMode</code></a>, <a href="#parameter-connectorProfileConfig"><code>connectorProfileConfig</code></a></td>
    <td></td>
    <td>Updates a given connector profile associated with your account.</td>
</tr>
<tr>
    <td><a href="#delete_connector_profile"><CopyableCode code="delete_connector_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables you to delete an existing connector profile.</td>
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
    defaultValue="describe_connector_profiles"
    values={[
        { label: 'describe_connector_profiles', value: 'describe_connector_profiles' }
    ]}
>
<TabItem value="describe_connector_profiles">

Returns a list of connector-profile details matching the provided connector-profile names and connector-types. Both input lists are optional, and you can use them to filter the result. If no names or connector-types are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.

```sql
SELECT
connectorProfileDetails,
nextToken
FROM aws.appflow.connector_profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connector_profile"
    values={[
        { label: 'create_connector_profile', value: 'create_connector_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connector_profile">

Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.

```sql
INSERT INTO aws.appflow.connector_profiles (
connectorProfileName,
kmsArn,
connectorType,
connectorLabel,
connectionMode,
connectorProfileConfig,
clientToken,
region
)
SELECT 
'{{ connectorProfileName }}' /* required */,
'{{ kmsArn }}',
'{{ connectorType }}' /* required */,
'{{ connectorLabel }}',
'{{ connectionMode }}' /* required */,
'{{ connectorProfileConfig }}' /* required */,
'{{ clientToken }}',
'{{ region }}'
RETURNING
connectorProfileArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connector_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connector_profiles resource.
    - name: connectorProfileName
      value: "{{ connectorProfileName }}"
    - name: kmsArn
      value: "{{ kmsArn }}"
    - name: connectorType
      value: "{{ connectorType }}"
      valid_values: ['Salesforce', 'Singular', 'Slack', 'Redshift', 'S3', 'Marketo', 'Googleanalytics', 'Zendesk', 'Servicenow', 'Datadog', 'Trendmicro', 'Snowflake', 'Dynatrace', 'Infornexus', 'Amplitude', 'Veeva', 'EventBridge', 'LookoutMetrics', 'Upsolver', 'Honeycode', 'CustomerProfiles', 'SAPOData', 'CustomConnector', 'Pardot']
    - name: connectorLabel
      value: "{{ connectorLabel }}"
    - name: connectionMode
      value: "{{ connectionMode }}"
      valid_values: ['Public', 'Private']
    - name: connectorProfileConfig
      description: |
        Defines the connector-specific configuration and credentials for the connector profile.
      value:
        connectorProfileProperties:
          Amplitude: "{{ Amplitude }}"
          Datadog:
            instanceUrl: "{{ instanceUrl }}"
          Dynatrace:
            instanceUrl: "{{ instanceUrl }}"
          GoogleAnalytics: "{{ GoogleAnalytics }}"
          Honeycode: "{{ Honeycode }}"
          InforNexus:
            instanceUrl: "{{ instanceUrl }}"
          Marketo:
            instanceUrl: "{{ instanceUrl }}"
          Redshift:
            databaseUrl: "{{ databaseUrl }}"
            bucketName: "{{ bucketName }}"
            bucketPrefix: "{{ bucketPrefix }}"
            roleArn: "{{ roleArn }}"
            dataApiRoleArn: "{{ dataApiRoleArn }}"
            isRedshiftServerless: {{ isRedshiftServerless }}
            clusterIdentifier: "{{ clusterIdentifier }}"
            workgroupName: "{{ workgroupName }}"
            databaseName: "{{ databaseName }}"
          Salesforce:
            instanceUrl: "{{ instanceUrl }}"
            isSandboxEnvironment: {{ isSandboxEnvironment }}
            usePrivateLinkForMetadataAndAuthorization: {{ usePrivateLinkForMetadataAndAuthorization }}
          ServiceNow:
            instanceUrl: "{{ instanceUrl }}"
          Singular: "{{ Singular }}"
          Slack:
            instanceUrl: "{{ instanceUrl }}"
          Snowflake:
            warehouse: "{{ warehouse }}"
            stage: "{{ stage }}"
            bucketName: "{{ bucketName }}"
            bucketPrefix: "{{ bucketPrefix }}"
            privateLinkServiceName: "{{ privateLinkServiceName }}"
            accountName: "{{ accountName }}"
            region: "{{ region }}"
          Trendmicro: "{{ Trendmicro }}"
          Veeva:
            instanceUrl: "{{ instanceUrl }}"
          Zendesk:
            instanceUrl: "{{ instanceUrl }}"
          SAPOData:
            applicationHostUrl: "{{ applicationHostUrl }}"
            applicationServicePath: "{{ applicationServicePath }}"
            portNumber: {{ portNumber }}
            clientNumber: "{{ clientNumber }}"
            logonLanguage: "{{ logonLanguage }}"
            privateLinkServiceName: "{{ privateLinkServiceName }}"
            oAuthProperties:
              tokenUrl: "{{ tokenUrl }}"
              authCodeUrl: "{{ authCodeUrl }}"
              oAuthScopes:
                - "{{ oAuthScopes }}"
            disableSSO: {{ disableSSO }}
          CustomConnector:
            profileProperties: "{{ profileProperties }}"
            oAuth2Properties:
              tokenUrl: "{{ tokenUrl }}"
              oAuth2GrantType: "{{ oAuth2GrantType }}"
              tokenUrlCustomProperties: "{{ tokenUrlCustomProperties }}"
          Pardot:
            instanceUrl: "{{ instanceUrl }}"
            isSandboxEnvironment: {{ isSandboxEnvironment }}
            businessUnitId: "{{ businessUnitId }}"
        connectorProfileCredentials:
          Amplitude:
            apiKey: "{{ apiKey }}"
            secretKey: "{{ secretKey }}"
          Datadog:
            apiKey: "{{ apiKey }}"
            applicationKey: "{{ applicationKey }}"
          Dynatrace:
            apiToken: "{{ apiToken }}"
          GoogleAnalytics:
            clientId: "{{ clientId }}"
            clientSecret: "{{ clientSecret }}"
            accessToken: "{{ accessToken }}"
            refreshToken: "{{ refreshToken }}"
            oAuthRequest:
              authCode: "{{ authCode }}"
              redirectUri: "{{ redirectUri }}"
          Honeycode:
            accessToken: "{{ accessToken }}"
            refreshToken: "{{ refreshToken }}"
            oAuthRequest:
              authCode: "{{ authCode }}"
              redirectUri: "{{ redirectUri }}"
          InforNexus:
            accessKeyId: "{{ accessKeyId }}"
            userId: "{{ userId }}"
            secretAccessKey: "{{ secretAccessKey }}"
            datakey: "{{ datakey }}"
          Marketo:
            clientId: "{{ clientId }}"
            clientSecret: "{{ clientSecret }}"
            accessToken: "{{ accessToken }}"
            oAuthRequest:
              authCode: "{{ authCode }}"
              redirectUri: "{{ redirectUri }}"
          Redshift:
            username: "{{ username }}"
            password: "{{ password }}"
          Salesforce:
            accessToken: "{{ accessToken }}"
            refreshToken: "{{ refreshToken }}"
            oAuthRequest:
              authCode: "{{ authCode }}"
              redirectUri: "{{ redirectUri }}"
            clientCredentialsArn: "{{ clientCredentialsArn }}"
            oAuth2GrantType: "{{ oAuth2GrantType }}"
            jwtToken: "{{ jwtToken }}"
          ServiceNow:
            username: "{{ username }}"
            password: "{{ password }}"
            oAuth2Credentials:
              clientId: "{{ clientId }}"
              clientSecret: "{{ clientSecret }}"
              accessToken: "{{ accessToken }}"
              refreshToken: "{{ refreshToken }}"
              oAuthRequest:
                authCode: "{{ authCode }}"
                redirectUri: "{{ redirectUri }}"
          Singular:
            apiKey: "{{ apiKey }}"
          Slack:
            clientId: "{{ clientId }}"
            clientSecret: "{{ clientSecret }}"
            accessToken: "{{ accessToken }}"
            oAuthRequest:
              authCode: "{{ authCode }}"
              redirectUri: "{{ redirectUri }}"
          Snowflake:
            username: "{{ username }}"
            password: "{{ password }}"
          Trendmicro:
            apiSecretKey: "{{ apiSecretKey }}"
          Veeva:
            username: "{{ username }}"
            password: "{{ password }}"
          Zendesk:
            clientId: "{{ clientId }}"
            clientSecret: "{{ clientSecret }}"
            accessToken: "{{ accessToken }}"
            oAuthRequest:
              authCode: "{{ authCode }}"
              redirectUri: "{{ redirectUri }}"
          SAPOData:
            basicAuthCredentials:
              username: "{{ username }}"
              password: "{{ password }}"
            oAuthCredentials:
              clientId: "{{ clientId }}"
              clientSecret: "{{ clientSecret }}"
              accessToken: "{{ accessToken }}"
              refreshToken: "{{ refreshToken }}"
              oAuthRequest:
                authCode: "{{ authCode }}"
                redirectUri: "{{ redirectUri }}"
          CustomConnector:
            authenticationType: "{{ authenticationType }}"
            basic:
              username: "{{ username }}"
              password: "{{ password }}"
            oauth2:
              clientId: "{{ clientId }}"
              clientSecret: "{{ clientSecret }}"
              accessToken: "{{ accessToken }}"
              refreshToken: "{{ refreshToken }}"
              oAuthRequest:
                authCode: "{{ authCode }}"
                redirectUri: "{{ redirectUri }}"
            apiKey:
              apiKey: "{{ apiKey }}"
              apiSecretKey: "{{ apiSecretKey }}"
            custom:
              customAuthenticationType: "{{ customAuthenticationType }}"
              credentialsMap: "{{ credentialsMap }}"
          Pardot:
            accessToken: "{{ accessToken }}"
            refreshToken: "{{ refreshToken }}"
            oAuthRequest:
              authCode: "{{ authCode }}"
              redirectUri: "{{ redirectUri }}"
            clientCredentialsArn: "{{ clientCredentialsArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connector_profile"
    values={[
        { label: 'update_connector_profile', value: 'update_connector_profile' }
    ]}
>
<TabItem value="update_connector_profile">

Updates a given connector profile associated with your account.

```sql
UPDATE aws.appflow.connector_profiles
SET 
connectorProfileName = '{{ connectorProfileName }}',
connectionMode = '{{ connectionMode }}',
connectorProfileConfig = '{{ connectorProfileConfig }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND connectorProfileName = '{{ connectorProfileName }}' --required
AND connectionMode = '{{ connectionMode }}' --required
AND connectorProfileConfig = '{{ connectorProfileConfig }}' --required
RETURNING
connectorProfileArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connector_profile"
    values={[
        { label: 'delete_connector_profile', value: 'delete_connector_profile' }
    ]}
>
<TabItem value="delete_connector_profile">

Enables you to delete an existing connector profile.

```sql
DELETE FROM aws.appflow.connector_profiles
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
