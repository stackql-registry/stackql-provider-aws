--- 
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - kendra
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

Creates, updates, deletes, gets or lists a <code>data_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_source"
    values={[
        { label: 'describe_data_source', value: 'describe_data_source' }
    ]}
>
<TabItem value="describe_data_source">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration details for the data source connector. This shows how the data source is configured. The configuration options for a data source depend on the data source provider.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the data source connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_document_enrichment_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration information for altering document metadata and content during the document ingestion process when you describe a data source. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see Customizing document metadata during the ingestion process.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the data source connector. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source to fail. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source connector. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the index used with the data source connector. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>The code for a language. This shows a supported language for all documents in the data source. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English. (pattern: &lt;code&gt;&#91;a-zA-Z-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the data source connector. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role with permission to access the data source and required resources. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>The schedule for Amazon Kendra to update the index.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the data source connector. When the status is ACTIVE the data source is ready to use. When the status is FAILED, the ErrorMessage field contains the reason that the data source failed. (CREATING, DELETING, FAILED, UPDATING, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the data source. For example, SHAREPOINT. (S3, SHAREPOINT, DATABASE, SALESFORCE, ONEDRIVE, SERVICENOW, CUSTOM, CONFLUENCE, GOOGLEDRIVE, WEBCRAWLER, WORKDOCS, FSX, SLACK, BOX, QUIP, JIRA, GITHUB, ALFRESCO, TEMPLATE)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the data source connector was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_configuration" /></td>
    <td><code>object</code></td>
    <td>Provides the configuration information to connect to an Amazon VPC.</td>
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
    <td><a href="#describe_data_source"><CopyableCode code="describe_data_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an Amazon Kendra data source connector.</td>
</tr>
<tr>
    <td><a href="#create_data_source"><CopyableCode code="create_data_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Creates a data source connector that you want to use with an Amazon Kendra index. You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector. CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised. For an example of creating an index and data source using the Python SDK, see Getting started with Python SDK. For an example of creating an index and data source using the Java SDK, see Getting started with Java SDK.</td>
</tr>
<tr>
    <td><a href="#update_data_source"><CopyableCode code="update_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Updates an Amazon Kendra data source connector.</td>
</tr>
<tr>
    <td><a href="#delete_data_source"><CopyableCode code="delete_data_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING. For more information, see Deleting Data Sources. Deleting an entire data source or re-syncing your index after deleting specific documents from a data source could take up to an hour or more, depending on the number of documents you want to delete.</td>
</tr>
<tr>
    <td><a href="#list_data_sources"><CopyableCode code="list_data_sources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Lists the data source connectors that you have created.</td>
</tr>
<tr>
    <td><a href="#start_data_source_sync_job"><CopyableCode code="start_data_source_sync_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a ResourceInUseException exception. Re-syncing your data source with your index after modifying, adding, or deleting documents from your data source respository could take up to an hour or more, depending on the number of documents to sync.</td>
</tr>
<tr>
    <td><a href="#stop_data_source_sync_job"><CopyableCode code="stop_data_source_sync_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.</td>
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
    defaultValue="describe_data_source"
    values={[
        { label: 'describe_data_source', value: 'describe_data_source' }
    ]}
>
<TabItem value="describe_data_source">

Gets information about an Amazon Kendra data source connector.

```sql
SELECT
configuration,
created_at,
custom_document_enrichment_configuration,
description,
error_message,
id,
index_id,
language_code,
name,
role_arn,
schedule,
status,
type,
updated_at,
vpc_configuration
FROM aws.kendra.data_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_source"
    values={[
        { label: 'create_data_source', value: 'create_data_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_source">

Creates a data source connector that you want to use with an Amazon Kendra index. You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector. CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised. For an example of creating an index and data source using the Python SDK, see Getting started with Python SDK. For an example of creating an index and data source using the Java SDK, see Getting started with Java SDK.

```sql
INSERT INTO aws.kendra.data_sources (
Name,
IndexId,
Type,
Configuration,
VpcConfiguration,
Description,
Schedule,
RoleArn,
Tags,
ClientToken,
LanguageCode,
CustomDocumentEnrichmentConfiguration,
region
)
SELECT 
'{{ Name }}',
'{{ IndexId }}' /* required */,
'{{ Type }}',
'{{ Configuration }}',
'{{ VpcConfiguration }}',
'{{ Description }}',
'{{ Schedule }}',
'{{ RoleArn }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ LanguageCode }}',
'{{ CustomDocumentEnrichmentConfiguration }}',
'{{ region }}'
RETURNING
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_sources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_sources resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A name for the data source connector.
    - name: IndexId
      value: "{{ IndexId }}"
      description: |
        The identifier of the index you want to use with the data source connector.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of data source repository. For example, SHAREPOINT.
      valid_values: ['S3', 'SHAREPOINT', 'DATABASE', 'SALESFORCE', 'ONEDRIVE', 'SERVICENOW', 'CUSTOM', 'CONFLUENCE', 'GOOGLEDRIVE', 'WEBCRAWLER', 'WORKDOCS', 'FSX', 'SLACK', 'BOX', 'QUIP', 'JIRA', 'GITHUB', 'ALFRESCO', 'TEMPLATE']
    - name: Configuration
      description: |
        Configuration information to connect to your data source repository. You can't specify the Configuration parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. The Configuration parameter is required for all other data sources.
      value:
        S3Configuration:
          BucketName: "{{ BucketName }}"
          InclusionPrefixes:
            - "{{ InclusionPrefixes }}"
          InclusionPatterns:
            - "{{ InclusionPatterns }}"
          ExclusionPatterns:
            - "{{ ExclusionPatterns }}"
          DocumentsMetadataConfiguration:
            S3Prefix: "{{ S3Prefix }}"
          AccessControlListConfiguration:
            KeyPath: "{{ KeyPath }}"
        SharePointConfiguration:
          SharePointVersion: "{{ SharePointVersion }}"
          Urls:
            - "{{ Urls }}"
          SecretArn: "{{ SecretArn }}"
          CrawlAttachments: {{ CrawlAttachments }}
          UseChangeLog: {{ UseChangeLog }}
          InclusionPatterns:
            - "{{ InclusionPatterns }}"
          ExclusionPatterns:
            - "{{ ExclusionPatterns }}"
          VpcConfiguration:
            SubnetIds:
              - "{{ SubnetIds }}"
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
          FieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
          DisableLocalGroups: {{ DisableLocalGroups }}
          SslCertificateS3Path:
            Bucket: "{{ Bucket }}"
            Key: "{{ Key }}"
          AuthenticationType: "{{ AuthenticationType }}"
          ProxyConfiguration:
            Host: "{{ Host }}"
            Port: {{ Port }}
            Credentials: "{{ Credentials }}"
        DatabaseConfiguration:
          DatabaseEngineType: "{{ DatabaseEngineType }}"
          ConnectionConfiguration:
            DatabaseHost: "{{ DatabaseHost }}"
            DatabasePort: {{ DatabasePort }}
            DatabaseName: "{{ DatabaseName }}"
            TableName: "{{ TableName }}"
            SecretArn: "{{ SecretArn }}"
          VpcConfiguration:
            SubnetIds:
              - "{{ SubnetIds }}"
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
          ColumnConfiguration:
            DocumentIdColumnName: "{{ DocumentIdColumnName }}"
            DocumentDataColumnName: "{{ DocumentDataColumnName }}"
            DocumentTitleColumnName: "{{ DocumentTitleColumnName }}"
            FieldMappings:
              - DataSourceFieldName: "{{ DataSourceFieldName }}"
                DateFieldFormat: "{{ DateFieldFormat }}"
                IndexFieldName: "{{ IndexFieldName }}"
            ChangeDetectingColumns:
              - "{{ ChangeDetectingColumns }}"
          AclConfiguration:
            AllowedGroupsColumnName: "{{ AllowedGroupsColumnName }}"
          SqlConfiguration:
            QueryIdentifiersEnclosingOption: "{{ QueryIdentifiersEnclosingOption }}"
        SalesforceConfiguration:
          ServerUrl: "{{ ServerUrl }}"
          SecretArn: "{{ SecretArn }}"
          StandardObjectConfigurations:
            - Name: "{{ Name }}"
              DocumentDataFieldName: "{{ DocumentDataFieldName }}"
              DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
              FieldMappings: "{{ FieldMappings }}"
          KnowledgeArticleConfiguration:
            IncludedStates:
              - "{{ IncludedStates }}"
            StandardKnowledgeArticleTypeConfiguration:
              DocumentDataFieldName: "{{ DocumentDataFieldName }}"
              DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
              FieldMappings:
                - DataSourceFieldName: "{{ DataSourceFieldName }}"
                  DateFieldFormat: "{{ DateFieldFormat }}"
                  IndexFieldName: "{{ IndexFieldName }}"
            CustomKnowledgeArticleTypeConfigurations:
              - Name: "{{ Name }}"
                DocumentDataFieldName: "{{ DocumentDataFieldName }}"
                DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
                FieldMappings: "{{ FieldMappings }}"
          ChatterFeedConfiguration:
            DocumentDataFieldName: "{{ DocumentDataFieldName }}"
            DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
            FieldMappings:
              - DataSourceFieldName: "{{ DataSourceFieldName }}"
                DateFieldFormat: "{{ DateFieldFormat }}"
                IndexFieldName: "{{ IndexFieldName }}"
            IncludeFilterTypes:
              - "{{ IncludeFilterTypes }}"
          CrawlAttachments: {{ CrawlAttachments }}
          StandardObjectAttachmentConfiguration:
            DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
            FieldMappings:
              - DataSourceFieldName: "{{ DataSourceFieldName }}"
                DateFieldFormat: "{{ DateFieldFormat }}"
                IndexFieldName: "{{ IndexFieldName }}"
          IncludeAttachmentFilePatterns:
            - "{{ IncludeAttachmentFilePatterns }}"
          ExcludeAttachmentFilePatterns:
            - "{{ ExcludeAttachmentFilePatterns }}"
        OneDriveConfiguration:
          TenantDomain: "{{ TenantDomain }}"
          SecretArn: "{{ SecretArn }}"
          OneDriveUsers:
            OneDriveUserList:
              - "{{ OneDriveUserList }}"
            OneDriveUserS3Path:
              Bucket: "{{ Bucket }}"
              Key: "{{ Key }}"
          InclusionPatterns:
            - "{{ InclusionPatterns }}"
          ExclusionPatterns:
            - "{{ ExclusionPatterns }}"
          FieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          DisableLocalGroups: {{ DisableLocalGroups }}
        ServiceNowConfiguration:
          HostUrl: "{{ HostUrl }}"
          SecretArn: "{{ SecretArn }}"
          ServiceNowBuildVersion: "{{ ServiceNowBuildVersion }}"
          KnowledgeArticleConfiguration:
            CrawlAttachments: {{ CrawlAttachments }}
            IncludeAttachmentFilePatterns:
              - "{{ IncludeAttachmentFilePatterns }}"
            ExcludeAttachmentFilePatterns:
              - "{{ ExcludeAttachmentFilePatterns }}"
            DocumentDataFieldName: "{{ DocumentDataFieldName }}"
            DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
            FieldMappings:
              - DataSourceFieldName: "{{ DataSourceFieldName }}"
                DateFieldFormat: "{{ DateFieldFormat }}"
                IndexFieldName: "{{ IndexFieldName }}"
            FilterQuery: "{{ FilterQuery }}"
          ServiceCatalogConfiguration:
            CrawlAttachments: {{ CrawlAttachments }}
            IncludeAttachmentFilePatterns:
              - "{{ IncludeAttachmentFilePatterns }}"
            ExcludeAttachmentFilePatterns:
              - "{{ ExcludeAttachmentFilePatterns }}"
            DocumentDataFieldName: "{{ DocumentDataFieldName }}"
            DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
            FieldMappings:
              - DataSourceFieldName: "{{ DataSourceFieldName }}"
                DateFieldFormat: "{{ DateFieldFormat }}"
                IndexFieldName: "{{ IndexFieldName }}"
          AuthenticationType: "{{ AuthenticationType }}"
        ConfluenceConfiguration:
          ServerUrl: "{{ ServerUrl }}"
          SecretArn: "{{ SecretArn }}"
          Version: "{{ Version }}"
          SpaceConfiguration:
            CrawlPersonalSpaces: {{ CrawlPersonalSpaces }}
            CrawlArchivedSpaces: {{ CrawlArchivedSpaces }}
            IncludeSpaces:
              - "{{ IncludeSpaces }}"
            ExcludeSpaces:
              - "{{ ExcludeSpaces }}"
            SpaceFieldMappings:
              - DataSourceFieldName: "{{ DataSourceFieldName }}"
                DateFieldFormat: "{{ DateFieldFormat }}"
                IndexFieldName: "{{ IndexFieldName }}"
          PageConfiguration:
            PageFieldMappings:
              - DataSourceFieldName: "{{ DataSourceFieldName }}"
                DateFieldFormat: "{{ DateFieldFormat }}"
                IndexFieldName: "{{ IndexFieldName }}"
          BlogConfiguration:
            BlogFieldMappings:
              - DataSourceFieldName: "{{ DataSourceFieldName }}"
                DateFieldFormat: "{{ DateFieldFormat }}"
                IndexFieldName: "{{ IndexFieldName }}"
          AttachmentConfiguration:
            CrawlAttachments: {{ CrawlAttachments }}
            AttachmentFieldMappings:
              - DataSourceFieldName: "{{ DataSourceFieldName }}"
                DateFieldFormat: "{{ DateFieldFormat }}"
                IndexFieldName: "{{ IndexFieldName }}"
          VpcConfiguration:
            SubnetIds:
              - "{{ SubnetIds }}"
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
          InclusionPatterns:
            - "{{ InclusionPatterns }}"
          ExclusionPatterns:
            - "{{ ExclusionPatterns }}"
          ProxyConfiguration:
            Host: "{{ Host }}"
            Port: {{ Port }}
            Credentials: "{{ Credentials }}"
          AuthenticationType: "{{ AuthenticationType }}"
        GoogleDriveConfiguration:
          SecretArn: "{{ SecretArn }}"
          InclusionPatterns:
            - "{{ InclusionPatterns }}"
          ExclusionPatterns:
            - "{{ ExclusionPatterns }}"
          FieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          ExcludeMimeTypes:
            - "{{ ExcludeMimeTypes }}"
          ExcludeUserAccounts:
            - "{{ ExcludeUserAccounts }}"
          ExcludeSharedDrives:
            - "{{ ExcludeSharedDrives }}"
        WebCrawlerConfiguration:
          Urls:
            SeedUrlConfiguration:
              SeedUrls:
                - "{{ SeedUrls }}"
              WebCrawlerMode: "{{ WebCrawlerMode }}"
            SiteMapsConfiguration:
              SiteMaps:
                - "{{ SiteMaps }}"
          CrawlDepth: {{ CrawlDepth }}
          MaxLinksPerPage: {{ MaxLinksPerPage }}
          MaxContentSizePerPageInMegaBytes: {{ MaxContentSizePerPageInMegaBytes }}
          MaxUrlsPerMinuteCrawlRate: {{ MaxUrlsPerMinuteCrawlRate }}
          UrlInclusionPatterns:
            - "{{ UrlInclusionPatterns }}"
          UrlExclusionPatterns:
            - "{{ UrlExclusionPatterns }}"
          ProxyConfiguration:
            Host: "{{ Host }}"
            Port: {{ Port }}
            Credentials: "{{ Credentials }}"
          AuthenticationConfiguration:
            BasicAuthentication:
              - Host: "{{ Host }}"
                Port: {{ Port }}
                Credentials: "{{ Credentials }}"
        WorkDocsConfiguration:
          OrganizationId: "{{ OrganizationId }}"
          CrawlComments: {{ CrawlComments }}
          UseChangeLog: {{ UseChangeLog }}
          InclusionPatterns:
            - "{{ InclusionPatterns }}"
          ExclusionPatterns:
            - "{{ ExclusionPatterns }}"
          FieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
        FsxConfiguration:
          FileSystemId: "{{ FileSystemId }}"
          FileSystemType: "{{ FileSystemType }}"
          VpcConfiguration:
            SubnetIds:
              - "{{ SubnetIds }}"
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
          SecretArn: "{{ SecretArn }}"
          InclusionPatterns:
            - "{{ InclusionPatterns }}"
          ExclusionPatterns:
            - "{{ ExclusionPatterns }}"
          FieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
        SlackConfiguration:
          TeamId: "{{ TeamId }}"
          SecretArn: "{{ SecretArn }}"
          VpcConfiguration:
            SubnetIds:
              - "{{ SubnetIds }}"
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
          SlackEntityList:
            - "{{ SlackEntityList }}"
          UseChangeLog: {{ UseChangeLog }}
          CrawlBotMessage: {{ CrawlBotMessage }}
          ExcludeArchived: {{ ExcludeArchived }}
          SinceCrawlDate: "{{ SinceCrawlDate }}"
          LookBackPeriod: {{ LookBackPeriod }}
          PrivateChannelFilter:
            - "{{ PrivateChannelFilter }}"
          PublicChannelFilter:
            - "{{ PublicChannelFilter }}"
          InclusionPatterns:
            - "{{ InclusionPatterns }}"
          ExclusionPatterns:
            - "{{ ExclusionPatterns }}"
          FieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
        BoxConfiguration:
          EnterpriseId: "{{ EnterpriseId }}"
          SecretArn: "{{ SecretArn }}"
          UseChangeLog: {{ UseChangeLog }}
          CrawlComments: {{ CrawlComments }}
          CrawlTasks: {{ CrawlTasks }}
          CrawlWebLinks: {{ CrawlWebLinks }}
          FileFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          TaskFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          CommentFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          WebLinkFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          InclusionPatterns:
            - "{{ InclusionPatterns }}"
          ExclusionPatterns:
            - "{{ ExclusionPatterns }}"
          VpcConfiguration:
            SubnetIds:
              - "{{ SubnetIds }}"
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
        QuipConfiguration:
          Domain: "{{ Domain }}"
          SecretArn: "{{ SecretArn }}"
          CrawlFileComments: {{ CrawlFileComments }}
          CrawlChatRooms: {{ CrawlChatRooms }}
          CrawlAttachments: {{ CrawlAttachments }}
          FolderIds:
            - "{{ FolderIds }}"
          ThreadFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          MessageFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          AttachmentFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          InclusionPatterns:
            - "{{ InclusionPatterns }}"
          ExclusionPatterns:
            - "{{ ExclusionPatterns }}"
          VpcConfiguration:
            SubnetIds:
              - "{{ SubnetIds }}"
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
        JiraConfiguration:
          JiraAccountUrl: "{{ JiraAccountUrl }}"
          SecretArn: "{{ SecretArn }}"
          UseChangeLog: {{ UseChangeLog }}
          Project:
            - "{{ Project }}"
          IssueType:
            - "{{ IssueType }}"
          Status:
            - "{{ Status }}"
          IssueSubEntityFilter:
            - "{{ IssueSubEntityFilter }}"
          AttachmentFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          CommentFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          IssueFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          ProjectFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          WorkLogFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          InclusionPatterns:
            - "{{ InclusionPatterns }}"
          ExclusionPatterns:
            - "{{ ExclusionPatterns }}"
          VpcConfiguration:
            SubnetIds:
              - "{{ SubnetIds }}"
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
        GitHubConfiguration:
          SaaSConfiguration:
            OrganizationName: "{{ OrganizationName }}"
            HostUrl: "{{ HostUrl }}"
          OnPremiseConfiguration:
            HostUrl: "{{ HostUrl }}"
            OrganizationName: "{{ OrganizationName }}"
            SslCertificateS3Path:
              Bucket: "{{ Bucket }}"
              Key: "{{ Key }}"
          Type: "{{ Type }}"
          SecretArn: "{{ SecretArn }}"
          UseChangeLog: {{ UseChangeLog }}
          GitHubDocumentCrawlProperties:
            CrawlRepositoryDocuments: {{ CrawlRepositoryDocuments }}
            CrawlIssue: {{ CrawlIssue }}
            CrawlIssueComment: {{ CrawlIssueComment }}
            CrawlIssueCommentAttachment: {{ CrawlIssueCommentAttachment }}
            CrawlPullRequest: {{ CrawlPullRequest }}
            CrawlPullRequestComment: {{ CrawlPullRequestComment }}
            CrawlPullRequestCommentAttachment: {{ CrawlPullRequestCommentAttachment }}
          RepositoryFilter:
            - "{{ RepositoryFilter }}"
          InclusionFolderNamePatterns:
            - "{{ InclusionFolderNamePatterns }}"
          InclusionFileTypePatterns:
            - "{{ InclusionFileTypePatterns }}"
          InclusionFileNamePatterns:
            - "{{ InclusionFileNamePatterns }}"
          ExclusionFolderNamePatterns:
            - "{{ ExclusionFolderNamePatterns }}"
          ExclusionFileTypePatterns:
            - "{{ ExclusionFileTypePatterns }}"
          ExclusionFileNamePatterns:
            - "{{ ExclusionFileNamePatterns }}"
          VpcConfiguration:
            SubnetIds:
              - "{{ SubnetIds }}"
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
          GitHubRepositoryConfigurationFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          GitHubCommitConfigurationFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          GitHubIssueDocumentConfigurationFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          GitHubIssueCommentConfigurationFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          GitHubIssueAttachmentConfigurationFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          GitHubPullRequestCommentConfigurationFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          GitHubPullRequestDocumentConfigurationFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          GitHubPullRequestDocumentAttachmentConfigurationFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
        AlfrescoConfiguration:
          SiteUrl: "{{ SiteUrl }}"
          SiteId: "{{ SiteId }}"
          SecretArn: "{{ SecretArn }}"
          SslCertificateS3Path:
            Bucket: "{{ Bucket }}"
            Key: "{{ Key }}"
          CrawlSystemFolders: {{ CrawlSystemFolders }}
          CrawlComments: {{ CrawlComments }}
          EntityFilter:
            - "{{ EntityFilter }}"
          DocumentLibraryFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          BlogFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          WikiFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          InclusionPatterns:
            - "{{ InclusionPatterns }}"
          ExclusionPatterns:
            - "{{ ExclusionPatterns }}"
          VpcConfiguration:
            SubnetIds:
              - "{{ SubnetIds }}"
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
        TemplateConfiguration:
          Template: "{{ Template }}"
    - name: VpcConfiguration
      description: |
        Provides the configuration information to connect to an Amazon VPC.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the data source connector.
    - name: Schedule
      value: "{{ Schedule }}"
      description: |
        Sets the frequency for Amazon Kendra to check the documents in your data source repository and update the index. If you don't set a schedule Amazon Kendra will not periodically update the index. You can call the StartDataSourceSyncJob API to update the index. Specify a cron- format schedule string or an empty string to indicate that the index is updated on demand. You can't specify the Schedule parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources. For more information, see IAM access roles for Amazon Kendra.. You can't specify the RoleArn parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. The RoleArn parameter is required for all other data sources.
    - name: Tags
      description: |
        A list of key-value pairs that identify or categorize the data source connector. You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A token that you provide to identify the request to create a data source connector. Multiple calls to the CreateDataSource API with the same client token will create only one data source connector.
    - name: LanguageCode
      value: "{{ LanguageCode }}"
      description: |
        The code for a language. This allows you to support a language for all documents when creating the data source connector. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English.
    - name: CustomDocumentEnrichmentConfiguration
      description: |
        Configuration information for altering document metadata and content during the document ingestion process. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see Customizing document metadata during the ingestion process.
      value:
        InlineConfigurations:
          - Condition:
              ConditionDocumentAttributeKey: "{{ ConditionDocumentAttributeKey }}"
              Operator: "{{ Operator }}"
              ConditionOnValue:
                StringValue: "{{ StringValue }}"
                StringListValue:
                  - "{{ StringListValue }}"
                LongValue: {{ LongValue }}
                DateValue: "{{ DateValue }}"
            Target:
              TargetDocumentAttributeKey: "{{ TargetDocumentAttributeKey }}"
              TargetDocumentAttributeValueDeletion: {{ TargetDocumentAttributeValueDeletion }}
              TargetDocumentAttributeValue:
                StringValue: "{{ StringValue }}"
                StringListValue:
                  - "{{ StringListValue }}"
                LongValue: {{ LongValue }}
                DateValue: "{{ DateValue }}"
            DocumentContentDeletion: {{ DocumentContentDeletion }}
        PreExtractionHookConfiguration:
          InvocationCondition:
            ConditionDocumentAttributeKey: "{{ ConditionDocumentAttributeKey }}"
            Operator: "{{ Operator }}"
            ConditionOnValue:
              StringValue: "{{ StringValue }}"
              StringListValue:
                - "{{ StringListValue }}"
              LongValue: {{ LongValue }}
              DateValue: "{{ DateValue }}"
          LambdaArn: "{{ LambdaArn }}"
          S3Bucket: "{{ S3Bucket }}"
        PostExtractionHookConfiguration:
          InvocationCondition:
            ConditionDocumentAttributeKey: "{{ ConditionDocumentAttributeKey }}"
            Operator: "{{ Operator }}"
            ConditionOnValue:
              StringValue: "{{ StringValue }}"
              StringListValue:
                - "{{ StringListValue }}"
              LongValue: {{ LongValue }}
              DateValue: "{{ DateValue }}"
          LambdaArn: "{{ LambdaArn }}"
          S3Bucket: "{{ S3Bucket }}"
        RoleArn: "{{ RoleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_source"
    values={[
        { label: 'update_data_source', value: 'update_data_source' }
    ]}
>
<TabItem value="update_data_source">

Updates an Amazon Kendra data source connector.

```sql
UPDATE aws.kendra.data_sources
SET 
Id = '{{ Id }}',
Name = '{{ Name }}',
IndexId = '{{ IndexId }}',
Configuration = '{{ Configuration }}',
VpcConfiguration = '{{ VpcConfiguration }}',
Description = '{{ Description }}',
Schedule = '{{ Schedule }}',
RoleArn = '{{ RoleArn }}',
LanguageCode = '{{ LanguageCode }}',
CustomDocumentEnrichmentConfiguration = '{{ CustomDocumentEnrichmentConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND IndexId = '{{ IndexId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_source"
    values={[
        { label: 'delete_data_source', value: 'delete_data_source' }
    ]}
>
<TabItem value="delete_data_source">

Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING. For more information, see Deleting Data Sources. Deleting an entire data source or re-syncing your index after deleting specific documents from a data source could take up to an hour or more, depending on the number of documents you want to delete.

```sql
DELETE FROM aws.kendra.data_sources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_data_sources"
    values={[
        { label: 'list_data_sources', value: 'list_data_sources' },
        { label: 'start_data_source_sync_job', value: 'start_data_source_sync_job' },
        { label: 'stop_data_source_sync_job', value: 'stop_data_source_sync_job' }
    ]}
>
<TabItem value="list_data_sources">

Lists the data source connectors that you have created.

```sql
EXEC aws.kendra.data_sources.list_data_sources 
@region='{{ region }}' --required 
@@json=
'{
"IndexId": "{{ IndexId }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
<TabItem value="start_data_source_sync_job">

Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a ResourceInUseException exception. Re-syncing your data source with your index after modifying, adding, or deleting documents from your data source respository could take up to an hour or more, depending on the number of documents to sync.

```sql
EXEC aws.kendra.data_sources.start_data_source_sync_job 
@region='{{ region }}' --required 
@@json=
'{
"Id": "{{ Id }}", 
"IndexId": "{{ IndexId }}"
}'
;
```
</TabItem>
<TabItem value="stop_data_source_sync_job">

Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.

```sql
EXEC aws.kendra.data_sources.stop_data_source_sync_job 
@region='{{ region }}' --required 
@@json=
'{
"Id": "{{ Id }}", 
"IndexId": "{{ IndexId }}"
}'
;
```
</TabItem>
</Tabs>
