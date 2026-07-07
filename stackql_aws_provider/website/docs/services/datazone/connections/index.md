--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - datazone
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' },
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="get_connection">

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
    <td>The name of the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>array</code></td>
    <td>The configurations of the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionCredentials" /></td>
    <td><code>object</code></td>
    <td>Connection credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Connection description.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The domain ID of the connection. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainUnitId" /></td>
    <td><code>string</code></td>
    <td>The domain unit ID of the connection. (pattern: &lt;code&gt;&#91;a-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentUserRole" /></td>
    <td><code>string</code></td>
    <td>The environment user role.</td>
</tr>
<tr>
    <td><CopyableCode code="physicalEndpoints" /></td>
    <td><code>array</code></td>
    <td>The physical endpoints of the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the project. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="props" /></td>
    <td><code>object</code></td>
    <td>Connection props.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The scope of the connection. (DOMAIN, PROJECT)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the connection. (ATHENA, BIGQUERY, DATABRICKS, DOCUMENTDB, DYNAMODB, HYPERPOD, IAM, MYSQL, OPENSEARCH, ORACLE, POSTGRESQL, REDSHIFT, S3, SAPHANA, SNOWFLAKE, SPARK, SQLSERVER, TERADATA, VERTICA, WORKFLOWS_MWAA, AMAZON_Q, MLFLOW)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connections">

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
    <td>The connection name.</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>array</code></td>
    <td>The configurations of a connection summary.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionId" /></td>
    <td><code>string</code></td>
    <td>The ID of a connection.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The domain ID of a connection. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainUnitId" /></td>
    <td><code>string</code></td>
    <td>The domain unit ID of a connection. (pattern: &lt;code&gt;&#91;a-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The environment ID of a connection. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="physicalEndpoints" /></td>
    <td><code>array</code></td>
    <td>The connection physical endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The connection project ID. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="props" /></td>
    <td><code>object</code></td>
    <td>The connection props.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The scope of the connection. (DOMAIN, PROJECT)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The connection type. (ATHENA, BIGQUERY, DATABRICKS, DOCUMENTDB, DYNAMODB, HYPERPOD, IAM, MYSQL, OPENSEARCH, ORACLE, POSTGRESQL, REDSHIFT, S3, SAPHANA, SNOWFLAKE, SPARK, SQLSERVER, TERADATA, VERTICA, WORKFLOWS_MWAA, AMAZON_Q, MLFLOW)</td>
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
    <td><a href="#get_connection"><CopyableCode code="get_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-withSecret"><code>withSecret</code></a></td>
    <td>Gets a connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.</td>
</tr>
<tr>
    <td><a href="#list_connections"><CopyableCode code="list_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-environmentIdentifier"><code>environmentIdentifier</code></a>, <a href="#parameter-projectIdentifier"><code>projectIdentifier</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Lists connections. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.</td>
</tr>
<tr>
    <td><a href="#create_connection"><CopyableCode code="create_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.</td>
</tr>
<tr>
    <td><a href="#update_connection"><CopyableCode code="update_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.</td>
</tr>
<tr>
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes and connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain where the connection is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the connection that is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-environmentIdentifier">
    <td><CopyableCode code="environmentIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment where you want to list connections.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of connections to return in a single call to ListConnections. When the number of connections to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListConnections to list the next set of connections.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the connection.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of connections is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of connections, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListConnections to list the next set of connections.</td>
</tr>
<tr id="parameter-projectIdentifier">
    <td><CopyableCode code="projectIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the project where you want to list connections.</td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The scope of the connection.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Specifies how you want to sort the listed connections.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies the sort order for the listed connections.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of connection.</td>
</tr>
<tr id="parameter-withSecret">
    <td><CopyableCode code="withSecret" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether a connection has a secret.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' },
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="get_connection">

Gets a connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.

```sql
SELECT
name,
configurations,
connectionCredentials,
connectionId,
description,
domainId,
domainUnitId,
environmentId,
environmentUserRole,
physicalEndpoints,
projectId,
props,
scope,
type_
FROM aws.datazone.connections
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND withSecret = '{{ withSecret }}'
;
```
</TabItem>
<TabItem value="list_connections">

Lists connections. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.

```sql
SELECT
name,
configurations,
connectionId,
domainId,
domainUnitId,
environmentId,
physicalEndpoints,
projectId,
props,
scope,
type_
FROM aws.datazone.connections
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND name = '{{ name }}'
AND environmentIdentifier = '{{ environmentIdentifier }}'
AND projectIdentifier = '{{ projectIdentifier }}'
AND type = '{{ type }}'
AND scope = '{{ scope }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connection"
    values={[
        { label: 'create_connection', value: 'create_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connection">

Creates a new connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.

```sql
INSERT INTO aws.datazone.connections (
awsLocation,
clientToken,
configurations,
description,
environmentIdentifier,
name,
props,
enableTrustedIdentityPropagation,
scope,
domain_identifier,
region
)
SELECT 
'{{ awsLocation }}',
'{{ clientToken }}',
'{{ configurations }}',
'{{ description }}',
'{{ environmentIdentifier }}',
'{{ name }}' /* required */,
'{{ props }}',
{{ enableTrustedIdentityPropagation }},
'{{ scope }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
name,
configurations,
connectionId,
description,
domainId,
domainUnitId,
environmentId,
physicalEndpoints,
projectId,
props,
scope,
type_
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connections
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the connections resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connections resource.
    - name: awsLocation
      description: |
        The location of a project.
      value:
        accessRole: "{{ accessRole }}"
        awsAccountId: "{{ awsAccountId }}"
        awsRegion: "{{ awsRegion }}"
        iamConnectionId: "{{ iamConnectionId }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: configurations
      value:
        - classification: "{{ classification }}"
          properties_: "{{ properties_ }}"
    - name: description
      value: "{{ description }}"
    - name: environmentIdentifier
      value: "{{ environmentIdentifier }}"
    - name: name
      value: "{{ name }}"
    - name: props
      description: |
        The properties of a connection.
      value:
        athenaProperties:
          workgroupName: "{{ workgroupName }}"
        glueProperties:
          glueConnectionInput:
            connectionProperties: "{{ connectionProperties }}"
            physicalConnectionRequirements:
              subnetId: "{{ subnetId }}"
              subnetIdList:
                - "{{ subnetIdList }}"
              securityGroupIdList:
                - "{{ securityGroupIdList }}"
              availabilityZone: "{{ availabilityZone }}"
            name: "{{ name }}"
            description: "{{ description }}"
            connectionType: "{{ connectionType }}"
            matchCriteria: "{{ matchCriteria }}"
            validateCredentials: {{ validateCredentials }}
            validateForComputeEnvironments:
              - "{{ validateForComputeEnvironments }}"
            sparkProperties: "{{ sparkProperties }}"
            athenaProperties: "{{ athenaProperties }}"
            pythonProperties: "{{ pythonProperties }}"
            authenticationConfiguration:
              authenticationType: "{{ authenticationType }}"
              oAuth2Properties:
                oAuth2GrantType: "{{ oAuth2GrantType }}"
                oAuth2ClientApplication: "{{ oAuth2ClientApplication }}"
                tokenUrl: "{{ tokenUrl }}"
                tokenUrlParametersMap: "{{ tokenUrlParametersMap }}"
                authorizationCodeProperties: "{{ authorizationCodeProperties }}"
                oAuth2Credentials: "{{ oAuth2Credentials }}"
              secretArn: "{{ secretArn }}"
              kmsKeyArn: "{{ kmsKeyArn }}"
              basicAuthenticationCredentials:
                userName: "{{ userName }}"
                password: "{{ password }}"
              customAuthenticationCredentials: "{{ customAuthenticationCredentials }}"
        hyperPodProperties:
          clusterName: "{{ clusterName }}"
        iamProperties:
          glueLineageSyncEnabled: {{ glueLineageSyncEnabled }}
        redshiftProperties:
          storage:
            clusterName: "{{ clusterName }}"
            workgroupName: "{{ workgroupName }}"
          databaseName: "{{ databaseName }}"
          host: "{{ host }}"
          port: {{ port }}
          credentials:
            secretArn: "{{ secretArn }}"
            usernamePassword:
              password: "{{ password }}"
              username: "{{ username }}"
          lineageSync:
            enabled: {{ enabled }}
            schedule:
              schedule: "{{ schedule }}"
        sparkEmrProperties:
          computeArn: "{{ computeArn }}"
          instanceProfileArn: "{{ instanceProfileArn }}"
          javaVirtualEnv: "{{ javaVirtualEnv }}"
          logUri: "{{ logUri }}"
          pythonVirtualEnv: "{{ pythonVirtualEnv }}"
          runtimeRole: "{{ runtimeRole }}"
          trustedCertificatesS3Uri: "{{ trustedCertificatesS3Uri }}"
          managedEndpointArn: "{{ managedEndpointArn }}"
        sparkGlueProperties:
          additionalArgs:
            connection: "{{ connection }}"
          glueConnectionName: "{{ glueConnectionName }}"
          glueConnectionNames:
            - "{{ glueConnectionNames }}"
          glueVersion: "{{ glueVersion }}"
          idleTimeout: {{ idleTimeout }}
          javaVirtualEnv: "{{ javaVirtualEnv }}"
          numberOfWorkers: {{ numberOfWorkers }}
          pythonVirtualEnv: "{{ pythonVirtualEnv }}"
          workerType: "{{ workerType }}"
        s3Properties:
          s3Uri: "{{ s3Uri }}"
          s3AccessGrantLocationId: "{{ s3AccessGrantLocationId }}"
          registerS3AccessGrantLocation: {{ registerS3AccessGrantLocation }}
        amazonQProperties:
          isEnabled: {{ isEnabled }}
          profileArn: "{{ profileArn }}"
          authMode: "{{ authMode }}"
        mlflowProperties:
          trackingServerArn: "{{ trackingServerArn }}"
        workflowsMwaaProperties:
          mwaaEnvironmentName: "{{ mwaaEnvironmentName }}"
        workflowsServerlessProperties: "{{ workflowsServerlessProperties }}"
        lakehouseProperties:
          glueLineageSyncEnabled: {{ glueLineageSyncEnabled }}
    - name: enableTrustedIdentityPropagation
      value: {{ enableTrustedIdentityPropagation }}
    - name: scope
      value: "{{ scope }}"
      valid_values: ['DOMAIN', 'PROJECT']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connection"
    values={[
        { label: 'update_connection', value: 'update_connection' }
    ]}
>
<TabItem value="update_connection">

Updates a connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.

```sql
UPDATE aws.datazone.connections
SET 
configurations = '{{ configurations }}',
description = '{{ description }}',
awsLocation = '{{ awsLocation }}',
props = '{{ props }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
configurations,
connectionId,
description,
domainId,
domainUnitId,
environmentId,
physicalEndpoints,
projectId,
props,
scope,
type_;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection"
    values={[
        { label: 'delete_connection', value: 'delete_connection' }
    ]}
>
<TabItem value="delete_connection">

Deletes and connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.

```sql
DELETE FROM aws.datazone.connections
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
